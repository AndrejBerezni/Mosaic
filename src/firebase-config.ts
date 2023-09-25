import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  getDocs,
  setDoc,
  doc,
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

//Email sign in
const signInWithEmail = async (email: string, password: string) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    console.log(result);
    return result.user.uid;
  } catch (error) {
    throw error;
  }
};

//Email sign up
const signUpWithEmail = async (email: string, password: string) => {
  try {
    const newUser = await createUserWithEmailAndPassword(auth, email, password);
    return newUser.user.uid;
  } catch (error) {
    throw error;
  }
};

//Sign out
const signOutUser = () => {
  signOut(getAuth());
};

//Get assets for user
interface Asset {
  uid: string;
  name: string;
  symbol: string;
  type: string;
  amount: number;
}

async function getAssetsForUser() {
  let assets: Asset[] = [];
  const user: string = getAuth().currentUser!.uid;
  const assetsQuery = query(collection(db, "assets"), where("uid", "==", user));
  const querySnapshot = await getDocs(assetsQuery);
  querySnapshot.forEach((doc) => {
    const assetData = doc.data() as Asset; //assert type
    assets.push(assetData);
  });
  console.log(assets);
  return assets;
}

//Create new asset
async function addNewAsset(asset: Asset) {
  try {
    const newAssetRef = doc(collection(db, "assets"));
    await setDoc(newAssetRef, asset);
  } catch (error) {
    console.error(error);
  }
}

//Exports
export {
  signInWithGoogle,
  signInWithEmail,
  signUpWithEmail,
  signOutUser,
  getAssetsForUser,
  addNewAsset,
};

export type { Asset };
