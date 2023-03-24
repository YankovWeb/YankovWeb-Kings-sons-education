import {auth} from "../../config/firebase";
import {createUserWithEmailAndPassword} from "firebase/auth";

const register = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    alert(error);
  }
};

export default register;
