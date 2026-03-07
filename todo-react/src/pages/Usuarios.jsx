import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

const fetchUsuarios = () =>
  fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json())

function Usuarios() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['usuarios'],
    queryFn: fetchUsuarios
  })

  if (isLoading) return <div style={{ textAlign: 'center', padding: '4rem' }}>⏳ Cargando usuarios...</div>
  if (isError) return <div style={{ textAlign: 'center', padding: '4rem', color: '#ef4444' }}>❌ Error al cargar</div>

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#1f2937', marginBottom: '2rem' }}>👥 Usuarios</h1>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {data.map(usuario => (
          <Link
            key={usuario.id}
            to={`/usuarios/${usuario.id}`}
            style={{ textDecoration: 'none' }}
          >
            <div style={{
              padding: '1.5rem',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              background: 'white',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              transition: 'border-color 0.2s'
            }}>
              <div>
                <h3 style={{ margin: 0, color: '#1f2937' }}>{usuario.name}</h3>
                <p style={{ margin: '0.25rem 0', color: '#6b7280' }}>📧 {usuario.email}</p>
                <p style={{ margin: 0, color: '#6b7280' }}>🏢 {usuario.company.name}</p>
              </div>
              <span style={{
                padding: '0.25rem 0.75rem',
                background: '#eff6ff',
                color: '#3b82f6',
                borderRadius: '999px',
                fontSize: '0.85rem'
              }}>
                #{usuario.id} →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Usuarios