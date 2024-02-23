// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPXW0VgedaZ3s2-jmXXLY9TxON-NL7Ow0",
  authDomain: "onboardio-auth.firebaseapp.com",
  projectId: "onboardio-auth",
  storageBucket: "onboardio-auth.appspot.com",
  messagingSenderId: "207684163382",
  appId: "1:207684163382:web:a3445fda5c295de2564597",
  measurementId: "G-VE4NPPG4X5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,app,provider};

