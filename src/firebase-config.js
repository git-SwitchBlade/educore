
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBq1SqLQ5WjzhNVOdDjRao16t2WiC1YgIQ",
  authDomain: "test-79a97.firebaseapp.com",
  projectId: "test-79a97",
  storageBucket: "test-79a97.appspot.com",
  messagingSenderId: "789579276484",
  appId: "1:789579276484:web:5c50ab27d57bb7ef712991",
  measurementId: "G-WY1QDSZ4VR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);