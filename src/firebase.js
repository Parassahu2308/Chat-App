import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCjQpqRDUURXtjscpnn9PFOD7Zl2Om2b5o",
  authDomain: "chatapp-7a478.firebaseapp.com",
  projectId: "chatapp-7a478",
  storageBucket: "chatapp-7a478.appspot.com",
  messagingSenderId: "870879912425",
  appId: "1:870879912425:web:e6a0179f14800f4bea2b78",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
