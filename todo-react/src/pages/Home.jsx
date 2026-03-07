import { Link } from 'react-router-dom'

function Home() {
  return (
     <div style={{ 
      padding: '8rem 2rem 4rem',  // Navbar arriba
      maxWidth: '1000px',
      margin: '0 auto',
      width: '100%'
    }}>
      <h1 style={{ textAlign: 'center', color: '#1f2937', fontSize: '3rem', marginBottom: '1rem' }}>
        🚀 Bienvenido a mi App React
      </h1>
      <p style={{ textAlign: 'center', color: '#6b7280', fontSize: '1.2rem', marginBottom: '3rem' }}>
        Dashboard fullstack con React + Router
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
        <div style={{ padding: '2rem', border: '2px solid #3b82f6', borderRadius: '12px' }}>
          <h3>📱 Frontend</h3>
          <ul style={{ color: '#6b7280' }}>
            <li>React 18</li>
            <li>React Router</li>
            <li>Vite (bundler)</li>
            <li>CSS-in-JS</li>
          </ul>
        </div>
        
        <div style={{ padding: '2rem', border: '2px solid #10b981', borderRadius: '12px' }}>
          <h3>💾 Backend (Próximamente)</h3>
          <ul style={{ color: '#6b7280' }}>
            <li>Node.js + Express</li>
            <li>MongoDB + Mongoose</li>
            <li>JWT Authentication</li>
          </ul>
        </div>
      </div>
      
      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <Link to="/dashboard" style={{
          padding: '1rem 2rem',
          background: '#3b82f6',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          fontSize: '1.1rem'
        }}>
          Ir al Dashboard →
        </Link>
      </div>
    </div>
  )
}

export default Home
