// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup,GoogleAuthProvider, signInWithRedirect, createUserWithEmailAndPassword} from "firebase/auth";

import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIA5zd1t4OD5242aaV93GE9y5T07eYdo4",
  authDomain: "mehakstore-588c6.firebaseapp.com",
  projectId: "mehakstore-588c6",
  storageBucket: "mehakstore-588c6.appspot.com",
  messagingSenderId: "636073095213",
  appId: "1:636073095213:web:62c5446e8c2fbcd554c8a4"
};

// Initialize Firebase
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
})

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);


// Lesson 76 
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth , additionalInformation = {} ) => {
  if(!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);

  if(!userSnapShot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userDocRef, {
        displayName, 
        email, 
        createdAt,
        ...additionalInformation
      })
      console.log("User created");
    }catch(error){
      console.log("An error occured while creating the user", error.message);
    }
  }

}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}