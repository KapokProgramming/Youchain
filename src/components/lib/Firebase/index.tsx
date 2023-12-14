import { getStorage } from "firebase/storage";
import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  // xxx
};

const app = !getApps().length? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export {app,db,storage}
// Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const storage = getStorage(app);