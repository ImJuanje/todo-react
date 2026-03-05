import { useState } from 'react'

function App() {
  // 1. Estado para NUEVA tarea (texto)
  const [nuevaTarea, setNuevaTarea] = useState('')
  
  // 2. Estado para LISTA de tareas (array)
  const [tareas, setTareas] = useState([])

  // 3. Función AÑADIR tarea
  const agregarTarea = () => {
    if (nuevaTarea.trim() === '') return // No añadir vacías
    
    setTareas([
      ...tareas,
      { 
        id: Date.now(), // ID único
        texto: nuevaTarea, 
        completada: false 
      }
    ])
    setNuevaTarea('') // Limpiar input
  }

  return (
    <div style={{ 
      padding: '2rem', 
      maxWidth: '500px', 
      margin: '0 auto',
      fontFamily: 'system-ui'
    }}>
      <h1 style={{ textAlign: 'center', color: '#3b82f6' }}>
        📝 Mi ToDo List
      </h1>

      {/* INPUT + BOTÓN */}
      <div style={{ 
        display: 'flex', 
        gap: '1rem', 
        marginBottom: '2rem' 
      }}>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Escribe una tarea..."
          style={{
            flex: 1,
            padding: '1rem',
            border: '2px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '1.1rem'
          }}
        />
        <button
          onClick={agregarTarea}
          style={{
            padding: '1rem 2rem',
            background: '#10b981',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1.1rem',
            cursor: 'pointer'
          }}
        >
          Añadir
        </button>
      </div>

      {/* MOSTRAR TAREAS */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tareas.map((tarea) => (
          <li key={tarea.id} style={{
            padding: '1rem',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            marginBottom: '0.5rem',
            display: 'flex',
            alignItems: 'center'
          }}>
            {tarea.texto}
          </li>
        ))}
      </ul>

      {tareas.length === 0 && (
        <p style={{ textAlign: 'center', color: '#6b7280' }}>
          ✨ No hay tareas. ¡Añade la primera!
        </p>
      )}
    </div>
  )
}

export default App
