import { useQuery } from '@tanstack/react-query'

const fetchUsuario = (id) =>
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(r => r.json())

export function useUsuario(id) {
  return useQuery({
    queryKey: ['usuario', id],
    queryFn: () => fetchUsuario(id)
  })
}