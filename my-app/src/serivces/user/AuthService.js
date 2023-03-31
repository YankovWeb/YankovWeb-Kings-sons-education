import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const logIn = (auth, email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signUp = (auth, email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const logOut = async (auth) => {
  return await signOut(auth);
};

export const googleSignIn = (auth) => {
  const googleAuthProvider = new GoogleAuthProvider();
  return signInWithPopup(auth, googleAuthProvider);
};
