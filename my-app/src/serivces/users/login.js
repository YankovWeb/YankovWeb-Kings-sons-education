import {auth} from "./firebase";

const login = async (email, password) => {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    alert(error.message);
  }
};

export default login;
