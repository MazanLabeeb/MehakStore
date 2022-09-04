// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup,GoogleAuthProvider} from "firebase/auth";
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
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);