import { useParams, Link } from 'react-router-dom'
import { useUsuario } from '../hooks/useUsuario'

function UsuariosDetalle() {
  const { id } = useParams()
  const { data, isLoading, isError } = useUsuario(id) // ← una sola línea

  if (isLoading) return <div style={{ textAlign: 'center', padding: '4rem' }}>⏳ Cargando...</div>
  if (isError) return <div style={{ textAlign: 'center', padding: '4rem', color: '#ef4444' }}>❌ Error</div>

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <Link to="/usuarios" style={{ color: '#3b82f6', textDecoration: 'none' }}>← Volver</Link>
      <div style={{
        marginTop: '2rem', padding: '2rem',
        border: '1px solid #e5e7eb', borderRadius: '12px', background: 'white'
      }}>
        <h1 style={{ color: '#1f2937', marginBottom: '0.5rem' }}>{data.name}</h1>
        <p style={{ color: '#6b7280' }}>@{data.username}</p>
        <div style={{ marginTop: '1.5rem', display: 'grid', gap: '0.75rem', color: '#1f2937' }}>
          <p>📧 {data.email}</p>
          <p>📞 {data.phone}</p>
          <p>🌐 {data.website}</p>
          <p>🏢 {data.company.name}</p>
          <p>📍 {data.address.city}</p>
        </div>
      </div>
    </div>
  )
}

export default UsuariosDetalle