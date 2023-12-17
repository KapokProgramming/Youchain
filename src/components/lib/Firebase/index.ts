import { getStorage } from "firebase/storage";
import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import firebaseConfig from "@/lib/db/firebaseConfig";

// console.log(firebaseConfig);

let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore();
const storage = getStorage(app);
export {app,db,storage}
