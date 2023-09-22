import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrH3T6bOyKm1DgMx0HOk9dPLvOuHnsULs",
  authDomain: "wealth-mosaic.firebaseapp.com",
  projectId: "wealth-mosaic",
  storageBucket: "wealth-mosaic.appspot.com",
  messagingSenderId: "418366767756",
  appId: "1:418366767756:web:0aca5edec03fc32921b1a9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

//firebase login, init deploy

//Google sign-in
const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user.uid;
  } catch (error) {
    throw error;
  }
};

//Sign out

const signOutUser = () => {
  signOut(getAuth());
};

export { signInWithGoogle, signOutUser };
