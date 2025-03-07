import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDag55NeGdp6gQvA5pDxC95yvxqzqu82eo",
  authDomain: "go-green-b278d.firebaseapp.com",
  projectId: "go-green-b278d",
  storageBucket: "go-green-b278d.firebasestorage.app",
  messagingSenderId: "124792290519",
  appId: "1:124792290519:web:03f48d929453d050ff0492",
  measurementId: "G-8QGH0PQR95",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
