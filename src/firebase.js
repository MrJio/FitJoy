// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3kK9NB0qcl3JhTwEMgGaoFc46nCPBwOA",
  authDomain: "fitjoy-be.firebaseapp.com",
  projectId: "fitjoy-be",
  storageBucket: "fitjoy-be.firebasestorage.app",
  messagingSenderId: "224126269200",
  appId: "1:224126269200:web:a5e5500fecabdb5ea85795",
  measurementId: "G-GCLZFD9X5W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);