import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth";

export const AuthContext = createContext()


const auth = getAuth(app)


const AuthProvider = ({children})=>{

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState({})

    const [products, setProducts] = useState([]);


    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithEmailPassword =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile =(profile)=>{
        setLoading(true)
       return updateProfile(auth.currentUser, profile)
      }

    const logout = ()=>{
        signOut(auth)
        .then(()=>{
            console.log("user logged out")
        })
        .catch(error=>{
            console.error(error)
        })

    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })

        return unsubscribe();

    },[])


    const authInfo = {createUser, signInWithEmailPassword,updateUserProfile, logout, user,loading, products, setProducts }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider;