import {createContext, useContext, useEffect, useState} from "react";
import {onIdTokenChanged} from "firebase/auth";
import {auth} from "../config/firebase";
import {
  logIn,
  signUp,
  logOut,
  googleSignIn,
} from "../serivces/user/AuthService";

const userAuthContext = createContext();

export function UserAuthContextProvider({children}) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const logInUser = async (email, password) => {
    try {
      setLoading(true);
      await logIn(auth, email, password);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  const signUpUser = async (email, password) => {
    return await signUp(auth, email, password);
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

export function useUserAuth() {
  return useContext(userAuthContext);
}
