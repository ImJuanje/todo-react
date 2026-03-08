import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useAuth } from '../contexts/AuthContext'
import { api } from '../services/api'

function Leads() {
  const { token, usuario, logout } = useAuth()
  const queryClient = useQueryClient()
  const [nuevo, setNuevo] = useState({ nombre: '', email: '', estado: 'nuevo', telefono: '', empresa: '' })
  const [error, setError] = useState('')

  // Obtener leads
  const { data: leads, isLoading } = useQuery({
    queryKey: ['leads'],
    queryFn: () => api.getLeads(token)
  })

  // Crear lead
  const crearMutation = useMutation({
    mutationFn: (datos) => api.crearLead(datos, token),
    onSuccess: () => {
      queryClient.invalidateQueries(['leads'])
      setNuevo({ nombre: '', email: '', estado: 'nuevo', telefono: '', empresa: '' })
      setError('')
    },
    onError: () => setError('Error al crear el lead')
  })

  // Eliminar lead
  const eliminarMutation = useMutation({
    mutationFn: (id) => api.eliminarLead(id, token),
    onSuccess: () => queryClient.invalidateQueries(['leads'])
  })

  const handleCrear = () => {
    if (!nuevo.nombre || !nuevo.email) {
      setError('Nombre y email son obligatorios')
      return
    }
    crearMutation.mutate(nuevo)
  }

  if (isLoading) return <div style={{ textAlign: 'center', padding: '4rem' }}>⏳ Cargando leads...</div>

  return (
    <div style={{ padding: '6rem 2rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ color: '#1f2937' }}>📋 CRM de Leads</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ color: '#6b7280' }}>👤 {usuario?.nombre}</span>
          <button onClick={logout} style={{ padding: '0.5rem 1rem', background: '#ef4444', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
            Cerrar sesión
          </button>
        </div>
      </div>

      {/* Formulario nuevo lead */}
      <div style={{ padding: '1.5rem', background: 'white', borderRadius: '12px', border: '1px solid #e5e7eb', marginBottom: '2rem' }}>
        <h3 style={{ color: '#1f2937', marginBottom: '1rem' }}>➕ Nuevo Lead</h3>
        {error && <p style={{ color: '#ef4444', marginBottom: '1rem' }}>{error}</p>}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <input placeholder="Nombre *" value={nuevo.nombre} onChange={e => setNuevo({...nuevo, nombre: e.target.value})}
            style={{ padding: '0.75rem', border: '2px solid #e5e7eb', borderRadius: '8px' }} />
          <input placeholder="Email *" value={nuevo.email} onChange={e => setNuevo({...nuevo, email: e.target.value})}
            style={{ padding: '0.75rem', border: '2px solid #e5e7eb', borderRadius: '8px' }} />
          <input placeholder="Teléfono" value={nuevo.telefono} onChange={e => setNuevo({...nuevo, telefono: e.target.value})}
            style={{ padding: '0.75rem', border: '2px solid #e5e7eb', borderRadius: '8px' }} />
          <input placeholder="Empresa" value={nuevo.empresa} onChange={e => setNuevo({...nuevo, empresa: e.target.value})}
            style={{ padding: '0.75rem', border: '2px solid #e5e7eb', borderRadius: '8px' }} />
          <select value={nuevo.estado} onChange={e => setNuevo({...nuevo, estado: e.target.value})}
            style={{ padding: '0.75rem', border: '2px solid #e5e7eb', borderRadius: '8px' }}>
            <option value="nuevo">Nuevo</option>
            <option value="en proceso">En proceso</option>
            <option value="ganado">Ganado</option>
            <option value="perdido">Perdido</option>
          </select>
          <button onClick={handleCrear} disabled={crearMutation.isPending}
            style={{ padding: '0.75rem', background: '#10b981', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
            {crearMutation.isPending ? 'Guardando...' : '➕ Añadir Lead'}
          </button>
        </div>
      </div>

      {/* Lista de leads */}
      <div style={{ display: 'grid', gap: '1rem' }}>
        {leads?.length === 0 && <p style={{ textAlign: 'center', color: '#6b7280' }}>No hay leads aún</p>}
        {leads?.map(lead => (
          <div key={lead._id} style={{
            padding: '1.5rem', background: 'white',
            borderRadius: '12px', border: '1px solid #e5e7eb',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center'
          }}>
            <div>
              <h3 style={{ margin: 0, color: '#1f2937' }}>{lead.nombre}</h3>
              <p style={{ margin: '0.25rem 0', color: '#6b7280' }}>📧 {lead.email}</p>
              {lead.empresa && <p style={{ margin: 0, color: '#6b7280' }}>🏢 {lead.empresa}</p>}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{
                padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.85rem',
                background: lead.estado === 'ganado' ? '#d1fae5' : lead.estado === 'perdido' ? '#fee2e2' : lead.estado === 'en proceso' ? '#fef3c7' : '#eff6ff',
                color: lead.estado === 'ganado' ? '#065f46' : lead.estado === 'perdido' ? '#991b1b' : lead.estado === 'en proceso' ? '#92400e' : '#1d4ed8'
              }}>
                {lead.estado}
              </span>
              <button onClick={() => eliminarMutation.mutate(lead._id)}
                style={{ padding: '0.5rem 1rem', background: '#ef4444', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Leads