import React, { useEffect, useState }from 'react'
import { auth, provider } from "../../../firebase/config"
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'

const LogIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [value, setValue] = useState("")


  const signIn = (e) => {
    e.preventDefault();
    
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential)
    })
    .catch((error) => {
      console.log(error)
    })
  }


  const handleClick = () => {
    signInWithPopup(auth, provider)
    .then((data) => {
      setValue(data.user.email)
      localStorage.setItem("email", data.user.email)
    })
    .catch((error) => {
      if (error.code === "auth/popup-closed-by-user") {
        console.log("El usuario cerró la ventana emergente sin completar el inicio de sesion")
      } else {
        throw new Error(error)
      }
    })
  }

  useEffect(() => {
    setValue(localStorage.getItem("email"))
  }, [])

  return (
    <div>
        <form onSubmit={signIn}>
          <h1>Log In</h1>
          <input 
            type="text" 
            placeholder='enter your email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder='enter your password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit'> Log In</button>
        </form>
        {value ? <p>Ya estas logeado con google con google</p> : <button onClick={handleClick}> SignIn with Google</button>}
        
    </div>
  )
}

export default LogIn