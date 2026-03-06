function Acerca() {
  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>ℹ️ Acerca de mí</h1>
      <p>Desarrollador Fullstack en formación Melilla, España</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
        <div>
          <h3>🚀 Tecnologías</h3>
          <ul style={{ color: '#6b7280' }}>
            <li>React + Next.js</li>
            <li>Node.js + Express</li>
            <li>MongoDB</li>
            <li>Tailwind CSS</li>
            <li>Vite</li>
          </ul>
        </div>
        
        <div>
          <h3>📋 Proyectos</h3>
          <ul style={{ color: '#6b7280' }}>
            <li>Landing pages profesionales</li>
            <li>CRM de leads B2B</li>
            <li>Automatizaciones n8n</li>
            <li>APIs RESTful</li>
          </ul>
        </div>
      </div>
      
      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <a href="/" style={{
          padding: '1rem 2rem',
          background: '#6b7280',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          fontSize: '1.1rem'
        }}>
          ← Volver al inicio
        </a>
      </div>
    </div>
  )
}

export default Acerca
