// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBOAY9PmCM2y-6L9LAaDWjPvQGoYDvp_e8",
  authDomain: "myportfolioblogs.firebaseapp.com",
  projectId: "myportfolioblogs",
  storageBucket: "myportfolioblogs.firebasestorage.app",
  messagingSenderId: "74837329851",
  appId: "1:74837329851:web:987d1f20050617ec00269e",
  measurementId: "G-9T6Y4GP5XG"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);         // For Firestore (blogs, metadata)
export const storage = getStorage(app);       // For uploading images
