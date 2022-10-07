import React ,{useState} from 'react'
const AuthContext=React.createContext(null)
function AuthProvider({children}) {
    const [state , dispatch] = useState({})
    console.log("STATE",state);
  return (
   <AuthContext.Provider value={{state , dispatch}}>
            {children}
   </AuthContext.Provider>
  )
}
export const  useAuth=()=>React.useContext(AuthContext)
export default AuthProvider