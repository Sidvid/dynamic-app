import React from 'react'
import { useAuth } from '../utils/useContext/AuthProvider'

function Users() {
  const value=useAuth()
  console.log("--",value);
  return (
    <div>Users</div>
  )
}

export default Users