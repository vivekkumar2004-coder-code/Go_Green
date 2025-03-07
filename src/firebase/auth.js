import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app, { auth } from './firebase';

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("User Info:", user);
  } catch (error) {
    console.error("Error signing in with Google:", error.message);
  }
};
