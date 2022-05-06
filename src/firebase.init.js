// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBu0Mf0mU7i-Z5Pk7NR6U2jSaa-0kuHHKY",
  authDomain: "medi-house-519a3.firebaseapp.com",
  projectId: "medi-house-519a3",
  storageBucket: "medi-house-519a3.appspot.com",
  messagingSenderId: "158788558873",
  appId: "1:158788558873:web:0c87cf007255b6f1860a88"
};


const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
export default app;