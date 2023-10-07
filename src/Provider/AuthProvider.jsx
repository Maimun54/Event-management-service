
import { createContext, useEffect, useState, } from "react";

import {   createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";




 export const AuthContext = createContext(null)

const auth= getAuth(app)

const AuthProvider = ({children}) => {
  
    const [user,setUser] =useState(null)
    const [dataLoader,setDataLoader]=useState(true)

    const createUser =(email,password)=>{
        setDataLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const SignIn = (email,password)=>{
        setDataLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const loginOut = ()=>{
        setDataLoader(true)
        return signOut(auth)
    }
    useEffect(()=>{
     const unSubscribe = onAuthStateChanged(auth,currentUser=>{
             
            console.log('check user',currentUser)
            setUser(currentUser)
            setDataLoader(false)
        })
        return ()=>{
            
            unSubscribe()
        } 
    },[])

    const authInfo ={
        user,
        createUser,
        SignIn,
        loginOut,
        dataLoader
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;