// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { get } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0Je0oG06PY2uCGkqFAddd2eniSG8nKoA",
  authDomain: "let-s-chat-1c53f.firebaseapp.com",
  projectId: "let-s-chat-1c53f",
  storageBucket: "let-s-chat-1c53f.appspot.com",
  messagingSenderId: "378621450766",
  appId: "1:378621450766:web:e0c66819537cf97b897a5f"
};


const app = initializeApp(firebaseConfig);

export const auth=getAuth()
export const db=getFirestore();
export const storage=getStorage();

 