import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email,password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () =>{
        return signInWithPopup(auth,googleProvider);
    }
    const githubSignIn = () =>{
        return signInWithPopup(auth,githubProvider);
    }

    const logoutUser = ()=>{
        return signOut(auth)
    }



    const userInfo = {
        user,
        createUser,
        loginUser,
        googleSignIn,
        githubSignIn,
        logoutUser,
    }

    useEffect(()=> {
        const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
              setUser(currentUser)
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