import { createContext, useState } from "react"

const AuthContext = createContext(null);

function AuthProvider({ children }) {
    const [user, setuser] = useState(null);
    const [loading, setLoading] = useState(true);
    const appInfo = {
        user,
        loading
    }
  return (
      <AuthContext.Provider valu={appInfo}>
          {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;