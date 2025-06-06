// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASZcFArKYEmBcmwk6KWKrHyIeZG6W37jc",
  authDomain: "fir-practice-39875.firebaseapp.com",
  projectId: "fir-practice-39875",
  storageBucket: "fir-practice-39875.firebasestorage.app",
  messagingSenderId: "417286319876",
  appId: "1:417286319876:web:3fb620ed20751880792a51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()