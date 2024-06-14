import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { EditMotorcycle } from "../pages/EditMotorcycle";
import { ErrorPage } from "../pages/ErrorPage";
import { Home } from "../pages/Home";
import { RegisterMotorcycle } from "../pages/RegisterMotorcycle";
import { LayoutMotorcycle } from "../layouts/LayoutMotorcycle";


export function Routes(){
  
  const router = createBrowserRouter([
    {
      path:"/",
      element: <LayoutMotorcycle />,
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
  return <RouterProvider router={router} />
}