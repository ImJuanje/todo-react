import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Acerca from './pages/Acerca'

function App() {
  return (
    <Router>
      <div style={{ 
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',           // ← AÑADE
        flexDirection: 'column'    // ← AÑADE
      }}>
        <Navbar />
        
        <main style={{           // ← ENVUELVE Routes en <main>
          flex: 1,               // ← AÑADE (toma espacio restante)
          display: 'flex',
          justifyContent: 'center',  // ← CENTRA HORIZONTAL
          alignItems: 'center',
          padding: '2rem'
        }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/acerca" element={<Acerca />} />
            <Route path="*" element={<div>404 - Página no encontrada<br/><a href="/">← Volver</a></div>} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}


export default App
