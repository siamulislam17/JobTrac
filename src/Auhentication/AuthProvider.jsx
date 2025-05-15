
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import { app } from './firebase.config';
import { Toaster, toast } from 'react-hot-toast';




export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const [user, setUserData] = useState(null);
   

    const createUser =(email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);

    }


    const forgetPassword = (email) =>{
        return sendPasswordResetEmail(auth, email)
    }
    const signInWithGoogle = () =>{
        return signInWithPopup(auth, provider);
    }

    const logIn = (email,password) =>{
        return signInWithEmailAndPassword(auth, email, password)
        

    }

    const updateUser = (updatedData) =>{
        return updateProfile(auth.currentUser, )
    }


    useEffect(()=>{

        const unsubscribe = onAuthStateChanged(auth, (user) => {
  
        setUserData(user)
        console.log(user);
      
 
        });

        return ()=>{
            unsubscribe()
        } 
    },[])

    const logOut = () =>{
       
        signOut(auth).then(() => {
          
            toast.success('Loged out successfully');
          }).catch((error) => {
            console.log(error)
          });
    } 

    const authData = {
        createUser,
        signInWithGoogle,
        logIn,
        updateUser,
        user,
        logOut,
        forgetPassword
        

   
    }





    return <AuthContext value={authData}>{children}</AuthContext>
}