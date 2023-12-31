import { createContext, useEffect, useState } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase/firebase.config";


const AuthContext = createContext(null);
const auth = getAuth(app);
function AuthProvider({ children }) {
    const [user, setuser] = useState(null);
    const [loading, setLoading] = useState(true);
// create user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //login with password and email
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    //login with google account
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    //logout
    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }

  
  useEffect(() => {
   const unSubcuribe= onAuthStateChanged(auth, currentUser => {
      setuser(currentUser);
      console.log('currentUser', currentUser);
      setLoading(false);
    });
    return () => {
      return unSubcuribe();
    }
  },[])
  
    const appInfo = {
        user,
      loading,
      createUser,
      login,
      logout,
      googleSignIn
        
    }
  return (
      <AuthContext.Provider valu={appInfo}>
          {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;