import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAUeIYf7JkfR5JfMWvAZoj-DUgn0-EZW8",
  authDomain: "furrypals-d96a5.firebaseapp.com",
  projectId: "furrypals-d96a5",
  storageBucket: "furrypals-d96a5.appspot.com",
  messagingSenderId: "481223081258",
  appId: "1:481223081258:web:6ddd083c3b9ad83de9f253",
  measurementId: "G-76S5EKY757",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
