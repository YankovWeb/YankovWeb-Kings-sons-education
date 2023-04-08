import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const logIn = (auth, email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const signUp = (auth, email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const logOut = async (auth) => await signOut(auth);

export const googleSignIn = (auth) => {
  const googleAuthProvider = new GoogleAuthProvider();
  return signInWithPopup(auth, googleAuthProvider);
};
