import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import {onIdTokenChanged} from "firebase/auth";
import {auth} from "../config/firebase";
import {
  logIn,
  signUp,
  logOut,
  googleSignIn,
} from "../serivces/user/authService";

const userAuthContext = createContext();

export function UserAuthContextProvider({children}) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const logInUser = useCallback(async (formData) => {
    try {
      setLoading(true);
      await logIn(auth, formData.email, formData.password);
      setError(false);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMessage(error);
      setError(true);
      throw error;
    }
  }, []);
  const signUpUser = async (formData) => {
    try {
      setLoading(true);
      await signUp(auth, formData.email, formData.password);
      setError(false);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMessage(error);
      setError(true);
    }
  };
  const logOutUser = async () => {
    return await logOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onIdTokenChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{
        user,
        loading,
        error,
        errorMessage,
        logInUser,
        signUpUser,
        logOutUser,
        googleSignIn,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export const useUserAuth = () => {
  return useContext(userAuthContext);
};
