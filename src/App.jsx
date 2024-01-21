import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { LoginPage } from "./pages/LoginPage"
import { ProductPage } from "./pages/ProductPage"
import { HomePage } from "./pages/HomePage"
import "./main.css"

function App() {

  const routes = createBrowserRouter([
    {path: "/", element: <HomePage />},
    {path: "/login", element: <LoginPage />},
    {path: "/auth/products", element: <ProductPage />}
  ])
  
  return (
    <>
      <RouterProvider router={routes} />
      <h1 className="card-title text-center">Hola Firebase, y desde App.jsx!</h1>
    </>
  )
}

export default App
