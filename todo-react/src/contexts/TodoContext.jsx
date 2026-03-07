import { createContext, useReducer, useContext, useEffect } from 'react'
const AGREGAR_TAREA = 'AGREGAR_TAREA'
const TOGGLE_TAREA = 'TOGGLE_TAREA'
const ELIMINAR_TAREA = 'ELIMINAR_TAREA'
const CAMBIAR_FILTRO = 'CAMBIAR_FILTRO'

function todoReducer(state, action) {
  switch (action.type) {
    case AGREGAR_TAREA:
      return { ...state, tareas: [...state.tareas, action.payload] }
    case TOGGLE_TAREA:
      return {
        ...state,
        tareas: state.tareas.map(t =>
          t.id === action.payload ? { ...t, completada: !t.completada } : t
        )
      }
    case ELIMINAR_TAREA:
      return { ...state, tareas: state.tareas.filter(t => t.id !== action.payload) }
    case CAMBIAR_FILTRO:
      return { ...state, filtro: action.payload }
    default:
      return state
  }
}

const TodoContext = createContext()

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, {
    tareas: JSON.parse(localStorage.getItem('tareas') || '[]'),
    filtro: 'todas'
  })

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(state.tareas))
  }, [state.tareas])

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  )
}

export function useTodo() {
  const context = useContext(TodoContext)
  if (!context) throw new Error('useTodo debe estar en TodoProvider')
  return context
}