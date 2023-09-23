// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAUeIYf7JkfR5JfMWvAZoj-DUgn0-EZW8",
  authDomain: "furrypals-d96a5.firebaseapp.com",
  projectId: "furrypals-d96a5",
  storageBucket: "furrypals-d96a5.appspot.com",
  messagingSenderId: "481223081258",
  appId: "1:481223081258:web:6ddd083c3b9ad83de9f253",
  measurementId: "G-76S5EKY757",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
