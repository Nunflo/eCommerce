import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { app } from "../firebase"
import { useNavigate } from "react-router-dom"


export const ProductPage = () => {
  const auth = getAuth(app)
  const navigate = useNavigate ()

  useEffect (() =>{
    const authentication = async () =>{
      await onAuthStateChanged (auth,(user) =>{
        if(user){
          console.log("Estas dentro");
        }else{
          console.log("Necesitas crear una nueva cuenta")
          navigate ("/login")
        }
      })
    }

      authentication()
  }, [])

  return (
    <div>
        <h1>ProductPage (Ruta Protegida)</h1>
        </div>
  )
}

