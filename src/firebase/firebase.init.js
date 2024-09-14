// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.VITE_FIREBASE_APIKEY,
  authDomain: import.meta.VITE_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.VITE_FIREBASE_MESSAGINGSENDERID,
  appId: import.meta.VITE_FIREBASE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);