import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { api } from '../services/api'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const datos = await api.login({ email, password })
      
      if (datos.error) {
        setError(datos.error)
        return
      }

      login(datos) // guarda token y usuario en el contexto
      navigate('/leads') // redirige al CRM
    } catch (err) {
      setError('Error al conectar con el servidor')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ 
        minHeight: '100vh', display: 'flex', 
        alignItems: 'center', justifyContent: 'center',
        background: '#f8fafc',
        paddingTop: '4rem'  // ← añade esto
        }}>
      <div style={{
        padding: '2rem', background: 'white',
        borderRadius: '12px', border: '1px solid #e5e7eb',
        width: '100%', maxWidth: '400px'
      }}>
        <h1 style={{ textAlign: 'center', color: '#1f2937', marginBottom: '2rem' }}>
          🔐 Iniciar sesión
        </h1>

        {error && (
          <div style={{ 
            padding: '1rem', background: '#fef2f2', 
            border: '1px solid #fecaca', borderRadius: '8px',
            color: '#ef4444', marginBottom: '1rem'
          }}>
            {error}
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: '0.75rem', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '1rem' }}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: '0.75rem', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '1rem' }}
          />
          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              padding: '0.75rem', background: loading ? '#9ca3af' : '#3b82f6',
              color: 'white', border: 'none', borderRadius: '8px',
              fontSize: '1rem', cursor: loading ? 'not-allowed' : 'pointer'
            }}
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </div>

        <p style={{ textAlign: 'center', marginTop: '1rem', color: '#6b7280' }}>
          ¿No tienes cuenta? <Link to="/registro" style={{ color: '#3b82f6' }}>Regístrate</Link>
        </p>
      </div>
    </div>
  )
}

export default Login