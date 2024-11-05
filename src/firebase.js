// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

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

// Initialize Firebase Services
export const auth = getAuth(app);
export const db = getFirestore(app); // Correct initialization for Firestore
