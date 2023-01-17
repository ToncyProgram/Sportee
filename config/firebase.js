// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfL9sNBv9AU1TKSwg7QKjZrkjSYSTDGKo",
  authDomain: "esports-app-b2bbd.firebaseapp.com",
  projectId: "esports-app-b2bbd",
  storageBucket: "esports-app-b2bbd.appspot.com",
  messagingSenderId: "980823356784",
  appId: "1:980823356784:web:4ac9940df3591a39b28bb5",
  measurementId: "G-RYYF8E3S3F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
