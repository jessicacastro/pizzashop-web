import { Outlet } from 'react-router-dom'

export const AppLayout = () => {
  return (
    <div>
      <h1>Cabeçalho</h1>

      <main>
        <Outlet />
      </main>
    </div>
  )
}
