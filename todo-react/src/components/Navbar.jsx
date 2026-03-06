function Navbar() {
  return (
    <nav style={{
  background: '#1f2937',
  padding: '1rem 2rem',
  color: 'white',
  width: '100vw',        // ← AÑADE
  position: 'fixed',     // ← AÑADE (fijo arriba)
  top: 0,                // ← AÑADE
  left: 0,               // ← AÑADE
  zIndex: 1000           // ← AÑADE
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
          <a href="/" style={{ color: 'white', textDecoration: 'none' }}>🏠 Inicio</a>
          <a href="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>📋 Dashboard</a>
          <a href="/acerca" style={{ color: 'white', textDecoration: 'none' }}>ℹ️ Acerca</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
