// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-49255.firebaseapp.com",
  projectId: "mern-blog-49255",
  storageBucket: "mern-blog-49255.appspot.com",
  messagingSenderId: "587529008746",
  appId: "1:587529008746:web:7d706c2c216e5779973c13",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
