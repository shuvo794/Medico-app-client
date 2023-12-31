import { createContext, useEffect, useState } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase/firebase.config";


const AuthContext = createContext(null);
const auth = getAuth(app);
function AuthProvider({ children }) {
    const [user, setuser] = useState(null);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      setuser(currentUser);
      console.log('currentUser', currentUser);
      setLoading(false);
    })
  },[])
  
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