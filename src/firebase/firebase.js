// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9zSUjI61QCP0Gxiusa_vg7VtyR8naEAQ",
  authDomain: "auth-e675f.firebaseapp.com",
  projectId: "auth-e675f",
  storageBucket: "auth-e675f.appspot.com",
  messagingSenderId: "846450111588",
  appId: "1:846450111588:web:f3aeb1b93a2c02a6ec9b71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);