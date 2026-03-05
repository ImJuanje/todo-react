import { useState, useEffect } from 'react'

function App() {
  const [nuevaTarea, setNuevaTarea] = useState('')
  
  // ✅ ESTO SOLO (localStorage funciona perfecto)
  const [tareas, setTareas] = useState(() => {
    try {
      const guardadas = localStorage.getItem('tareas')
      return guardadas ? JSON.parse(guardadas) : []
    } catch {
      return []
    }
  })
  
  const [filtro, setFiltro] = useState('todas')

  const tareasFiltradas = tareas.filter(tarea => {
    if (filtro === 'todas') return true
    if (filtro === 'completadas') return tarea.completada
    if (filtro === 'pendientes') return !tarea.completada
    return true
  })

  const agregarTarea = () => {
    if (nuevaTarea.trim() === '') return
    setTareas([...tareas, { id: Date.now(), texto: nuevaTarea, completada: false }])
    setNuevaTarea('')
  }

  // ✅ SOLO ESTE useEffect (guarda cambios)
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas))
  }, [tareas])

  // ❌ BORRA ESTOS 2 useEffect (causan conflicto)

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: '0 auto', fontFamily: 'system-ui' }}>
      <h1 style={{ textAlign: 'center', color: '#3b82f6' }}>📝 Mi ToDo List PRO</h1>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <input
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Escribe una tarea..."
          style={{ flex: 1, padding: '1rem', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '1.1rem' }}
        />
        <button onClick={agregarTarea} style={{ padding: '1rem 2rem', background: '#10b981', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1.1rem', cursor: 'pointer' }}>
          Añadir
        </button>
      </div>

      {/* FILTROS */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button onClick={() => setFiltro('todas')} style={{ padding: '0.5rem 1rem', background: filtro === 'todas' ? '#3b82f6' : '#e5e7eb', color: filtro === 'todas' ? 'white' : '#374151', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
          Todas ({tareas.length})
        </button>
        <button onClick={() => setFiltro('pendientes')} style={{ padding: '0.5rem 1rem', background: filtro === 'pendientes' ? '#3b82f6' : '#e5e7eb', color: filtro === 'pendientes' ? 'white' : '#374151', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
          Pendientes ({tareas.filter(t => !t.completada).length})
        </button>
        <button onClick={() => setFiltro('completadas')} style={{ padding: '0.5rem 1rem', background: filtro === 'completadas' ? '#3b82f6' : '#e5e7eb', color: filtro === 'completadas' ? 'white' : '#374151', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
          Completadas ({tareas.filter(t => t.completada).length})
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tareasFiltradas.map((tarea) => {
          const toggleCompletada = () => {
            setTareas(tareas.map(t => t.id === tarea.id ? { ...t, completada: !t.completada } : t))
          }
          const eliminarTarea = () => {
            setTareas(tareas.filter(t => t.id !== tarea.id))
          }

          return (
            <li key={tarea.id} style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '8px', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '1rem', background: tarea.completada ? '#f3f4f6' : 'white', color: '#1f2937' }}>
              <input type="checkbox" checked={tarea.completada} onChange={toggleCompletada} />
              <span style={{ flex: 1, textDecoration: tarea.completada ? 'line-through' : 'none', opacity: tarea.completada ? 0.5 : 1, fontSize: '1.1rem' }}>
                {tarea.texto}
              </span>
              <button onClick={eliminarTarea} style={{ padding: '0.5rem 1rem', background: '#ef4444', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '0.9rem' }}>
                🗑️
              </button>
            </li>
          )
        })}
      </ul>

      {tareasFiltradas.length === 0 && (
        <p style={{ textAlign: 'center', color: '#6b7280' }}>
          ✨ {filtro === 'todas' ? 'No hay tareas' : filtro === 'pendientes' ? '¡Todo completado!' : 'No hay tareas completadas'}
        </p>
      )}
    </div>
  )
}

export default App
