import { ToastContainer } from "react-toastify"
import { Routes } from "./routes"
import 'react-toastify/dist/ReactToastify.css'

export function App(){
  return(
    <>
      <ToastContainer limit={3} autoClose={3000} theme="dark" />
      <Routes />
    </>
  )
}