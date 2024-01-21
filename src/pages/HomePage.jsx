import { Signin } from "../components/Signin"

export const HomePage = () => {

  return (
    <>
    <h1 className="text-center">Welcome, Create new User!</h1>
    <section className="container d-flex justify-content-center">
     <Signin />
    </section>
    </>
  )
}
