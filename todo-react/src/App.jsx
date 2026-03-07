import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { TodoProvider } from './contexts/TodoContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Acerca from './pages/Acerca'

function App() {
  return (
    <Router>
      <TodoProvider>
        <div style={{ 
          minHeight: '100vh', 
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          background: '#f8fafc'
        }}>
          <Navbar />
          <main style={{ flex: 1, padding: '2rem' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/acerca" element={<Acerca />} />
              <Route path="*" element={
                <div style={{ textAlign: 'center', padding: '4rem' }}>
                  <h1 style={{ color: '#6b7280' }}>404</h1>
                  <p>Página no encontrada</p>
                  <a href="/" style={{ color: '#3b82f6' }}>← Volver al inicio</a>
                </div>
              } />
            </Routes>
          </main>
        </div>
      </TodoProvider>
    </Router>
  )
}

export default App
