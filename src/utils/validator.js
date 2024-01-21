const emailValidation = {
    value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i ,
    message: "Invalid email address"
  }
  
  const minPassword = {
    value: 12 ,
    message: "Password must be at least 12 characters"
  }
  
  const maxPassword = {
    value:21 ,
    message: "Password must be lees that 21 characters"
  }

  export {emailValidation,minPassword, maxPassword}