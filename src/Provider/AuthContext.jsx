import { createContext } from "react"

const AuthContext = createContext(null);

function AuthContext({children}) {
  return (
      <AuthContext.Provider>
          {children}
    </AuthContext.Provider>
  )
}

export default AuthContext