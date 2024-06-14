import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import './styles/globals.css'
import { RegisterMotorcycle } from './routes/RegisterMotorcycle.tsx'
import { EditMotorcycle } from './routes/EditMotorcycle.tsx'
import { App } from './App.tsx'
import { Home } from './routes/Home.tsx'
import { ErrorPage } from './routes/ErrorPage.tsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:"/register",
        element: <RegisterMotorcycle />
      },
       {
        path:"/edit",
        element: <EditMotorcycle />
      },
      {
        path:"/",
        element: <Home />
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
