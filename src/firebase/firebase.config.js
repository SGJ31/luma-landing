import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApzqU_MZrquckg7Gc3rrHrox7lk3rtLhw",
  authDomain: "luma-landing.firebaseapp.com",
  projectId: "luma-landing",
  storageBucket: "luma-landing.appspot.com",
  messagingSenderId: "282415579800",
  appId: "1:282415579800:web:3cf9b5ccd2d98c7bc606ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth (app)