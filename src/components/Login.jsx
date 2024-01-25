import { useForm } from "react-hook-form";
import { emailValidation, maxPassword, minPassword } from "../utils/validator";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
        const {register, handleSubmit,formState:{errors}} = useForm()
        const auth = getAuth(app)
        const navigate= useNavigate()
        const [error, setError] = useState()

        const loginUser = async (data) =>{
    try {
        const response = await signInWithEmailAndPassword(auth,data.email, data.password)
        console.log(response)
        navigate ("/auth/products")
    } catch (error) {
        setError(error.message.replace("Firebase: Error (auth/email-already-in-use).",
         "Error email already in use"))
    }
  }

  return (
    
    <>
     <div className="card" style={{with: "18rem"}}>
      <div className="card-body">
        <h5 className="card-title text-center">Login User </h5>
        <form onSubmit={handleSubmit (loginUser)}>
          <div className="mb-3">

            <input
             type="text"
            name="email"
            {...register("email", {required: "Email is required", 
            pattern: emailValidation
            })}
            className="form-control"
             placeholder="Type your e-mail" />
             {
              errors.email && <span className="text-danger">{errors.email.message}</span>
             }
          </div>

          <div className="mb-3">

          <input
           type="password"
          name="password"
          {...register("password", {required: "Is required new password", 
          minLength: minPassword, 
          maxLength: maxPassword})}
           className="form-control"
             placeholder="Type your Password" />
             {
              errors.password && <span className="text-danger">{errors.password.message}</span>
             }
          </div>

          <div className="mb-3 d-grid gap-2">
            <button type="submit" className="btn btn-secondary">
              Bienvenido
            </button>
          </div>
        </form>
       
        {
        error && <div className="text-danger">{error}</div>
        } 

      </div>
    </div>
    </>
  )
}

