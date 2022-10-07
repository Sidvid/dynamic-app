import React from 'react'
import {useLocation} from "react-router-dom"

function Login() {
    const location = useLocation()
    console.log("location", location);
  return (
    <div>Login</div>
  )
}

export default Login