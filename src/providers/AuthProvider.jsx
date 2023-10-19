import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }
    const githubSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth,githubProvider);
    }

    const logoutUser = ()=>{
        setLoading(true);
        return signOut(auth)
    }



    const userInfo = {
        user,
        loading,
        createUser,
        loginUser,
        googleSignIn,
        githubSignIn,
        logoutUser,
    }

    useEffect(()=> {
        const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
              setUser(currentUser)
              setLoading(false)
          })
          return () => {
              unSubscribe();
          }
      },[])


    return (
        <AuthContext.Provider value = {userInfo}>
            {children}
            </AuthContext.Provider>
    );
};

export default AuthProvider;