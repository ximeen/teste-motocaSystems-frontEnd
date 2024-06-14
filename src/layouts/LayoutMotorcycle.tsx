import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function LayoutMotorcycle() {
  return (
    <div className="bg-violet-950 pb-20 min-h-screen">
      <Header />
      <Outlet />
    </div>
  )
}