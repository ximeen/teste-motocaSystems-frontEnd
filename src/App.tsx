import { ToastContainer } from "react-toastify"
import { Routes } from "./routes"
import 'react-toastify/dist/ReactToastify.css'

export function App(){
  return(
    <>
      <ToastContainer 
      limit={3} 
      position="bottom-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover
      theme="dark"
    />
      <Routes />
    </>
  )
}