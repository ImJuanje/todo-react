import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{
      background: '#1f2937',
      padding: '1rem 2rem',
      color: 'white',
      width: '100vw',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1000
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h2 style={{ margin: 0 }}>🚀 Mi App React</h2>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>🏠 Inicio</Link>
          <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>📋 Dashboard</Link>
          <Link to="/usuarios" style={{ color: 'white', textDecoration: 'none' }}>👥 Usuarios</Link>
          <Link to="/acerca" style={{ color: 'white', textDecoration: 'none' }}>ℹ️ Acerca</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar