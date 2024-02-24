import { Outlet } from 'react-router-dom'

export const AuthLayout = () => {
  return (
    <div>
      <h1>Auth</h1>

      <main>
        <Outlet />
      </main>
    </div>
  )
}
