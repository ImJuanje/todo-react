const API_URL = 'http://localhost:3000'

export const api = {
  // Auth
  registro: (datos) => fetch(`${API_URL}/auth/registro`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos)
  }).then(r => r.json()),

  login: (datos) => fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos)
  }).then(r => r.json()),

  // Leads
  getLeads: (token) => fetch(`${API_URL}/leads`, {
    headers: { 'Authorization': `Bearer ${token}` }
  }).then(r => r.json()),

  crearLead: (datos, token) => fetch(`${API_URL}/leads`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(datos)
  }).then(r => r.json()),

  eliminarLead: (id, token) => fetch(`${API_URL}/leads/${id}`, {
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${token}` }
  }).then(r => r.json())
}