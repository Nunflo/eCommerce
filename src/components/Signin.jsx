import { useForm } from "react-hook-form"
import { emailValidation, maxPassword, minPassword } from "../utils/validator"
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import { app } from "../firebase"

export const Signin = () => {
    const {register, handleSubmit,formState:{errors}} = useForm()
    const auth = getAuth(app)
    

  const createUser = async (data) =>{
    try {
        const useCredential = await createUserWithEmailAndPassword(auth,data.email, data.password)
        console.log(useCredential)
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <>
    <div className="card" style={{with: "18rem"}}>
      <div className="card-body">
        <h5 className="card-title text-center">Create new User </h5>
        <form onSubmit={handleSubmit (createUser)}>
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
              New Account
            </button>
          </div>
        </form>

      </div>
    </div>
    </>
  )
}
