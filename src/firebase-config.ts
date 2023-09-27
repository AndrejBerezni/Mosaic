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
  deleteDoc,
  doc,
  collection,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
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
interface IAsset {
  uid: string | null;
  name: string;
  symbol: string;
  type: string;
  amount: number;
}

async function getAssetsForUser() {
  let assets: IAsset[] = [];
  const user: string = getAuth().currentUser!.uid;
  const assetsQuery = query(collection(db, "assets"), where("uid", "==", user));
  const querySnapshot = await getDocs(assetsQuery);
  querySnapshot.forEach((doc) => {
    const assetData = doc.data() as IAsset; //assert type
    assets.push(assetData);
  });
  return assets;
}

//Create new asset
async function addNewAsset(asset: IAsset) {
  try {
    const existingAssets: IAsset[] = await getAssetsForUser();
    if (existingAssets.some((exAsset) => exAsset.name === asset.name)) {
      throw new Error(
        "Asset already exists. To add more units, please edit the existing asset."
      );
    }
    const newAssetRef = doc(collection(db, "assets"));
    await setDoc(newAssetRef, asset);
    return { success: true };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
}

//Delete asset

async function deleteAsset(name: string) {
  const user: string = getAuth().currentUser!.uid;
  const assetQuery = query(
    collection(db, "assets"),
    where("uid", "==", user),
    where("name", "==", name)
  );
  const querySnapshot = await getDocs(assetQuery);
  querySnapshot.forEach((d) => {
    deleteDoc(doc(db, "assets", d.ref.id));
  });
}
//Exports
export {
  signInWithGoogle,
  signInWithEmail,
  signUpWithEmail,
  signOutUser,
  getAssetsForUser,
  addNewAsset,
  deleteAsset,
};

export type { IAsset };
