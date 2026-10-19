import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
 
const firebaseConfig = {
  apiKey: "AIzaSyBrh_w7O9jExJ8oz33jcQnXffBwlXAEKX8",
  authDomain: "fit5032-92e3c.firebaseapp.com",
  projectId: "fit5032-92e3c",
  storageBucket: "fit5032-92e3c.firebasestorage.app",
  messagingSenderId: "292016355844",
  appId: "1:292016355844:web:2272724e587c504c035351",
  measurementId: "G-NPMTX1J7HR"
};
 
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
 