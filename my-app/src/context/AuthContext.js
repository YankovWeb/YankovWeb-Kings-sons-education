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

  const logInUser = async (email, password) => {
    return await logIn(auth, email, password);
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
      value={{user, logInUser, signUpUser, logOutUser, googleSignIn}}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
