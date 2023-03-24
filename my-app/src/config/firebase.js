// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAG-ztMSvOVIBKGkUlZbJLG37hhBFB-2bA",
  authDomain: "kse-app-64529.firebaseapp.com",
  projectId: "kse-app-64529",
  storageBucket: "kse-app-64529.appspot.com",
  messagingSenderId: "470287680113",
  appId: "1:470287680113:web:5a0947f3618e4b0240d1d0",
  measurementId: "G-S62PFHY09B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
