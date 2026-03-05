import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div style={{ 
      padding: '2rem', 
      maxWidth: '400px', 
      margin: '0 auto',
      textAlign: 'center',
      fontFamily: 'system-ui'
    }}>
      <h1>🚀 React Semana 1</h1>
      <div style={{
        fontSize: '4rem',
        fontWeight: 'bold',
        margin: '2rem 0',
        color: '#3b82f6'
      }}>
        {count}
      </div>
      <button 
        onClick={() => setCount(count + 1)}
        style={{
          padding: '1rem 2rem',
          fontSize: '1.2rem',
          background: '#10b981',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        +1
      </button>
    </div>
  )
}

export default App
