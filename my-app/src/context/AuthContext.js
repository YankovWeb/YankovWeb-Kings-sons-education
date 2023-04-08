import {createContext, useContext, useEffect, useState} from "react";
import {onIdTokenChanged, updateProfile} from "firebase/auth";
import {auth} from "../config/firebase";
import {logIn, signUp, logOut} from "../serivces/user/authService";
import {toast} from "react-toastify";
import Toast from "../UI/Toast";
import "react-toastify/dist/ReactToastify.css";

const userAuthContext = createContext();

export function UserAuthContextProvider({children}) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const logInUser = async (formData) => {
    try {
      setLoading(true);
      await toast.promise(logIn(auth, formData.email, formData.password), {
        pending: "Connecting...",
        success: "Welcome! 👌",
      });
      setError(false);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMessage(error);
      setError(true);
      toast.error(`${error.code}`);
      throw new Error(error);
    }
  };

  const signUpUser = async (formData) => {
    try {
      setLoading(true);
      await toast.promise(signUp(auth, formData.email, formData.password), {
        pending: "Connecting...",
        success: "Created! 👌",
      });
      if (auth.currentUser !== null) {
        await updateProfile(auth.currentUser, {
          displayName: formData.displayName,
        });
      }
      setError(false);
      setLoading(false);
      toast.success(`Welcome`);
    } catch (error) {
      setLoading(false);
      setErrorMessage(error);
      setError(true);
      toast.error(`${error.code}`);
    }
  };

  const logOutUser = async () => {
    try {
      setLoading(true);
      setError(false);
      setLoading(false);
      await toast.promise(logOut(auth), {
        pending: "Connecting...",
        success: "Goodbye! 👌",
      });
    } catch (error) {
      setLoading(false);
      setErrorMessage(error);
      setError(true);
      toast.error("Something got wrong!");
    }
  };
  useEffect(() => {
    const unsubscribe = onIdTokenChanged(auth, (currentuser) => {
      console.count("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <Toast />
      <userAuthContext.Provider
        value={{
          user,
          loading,
          error,
          errorMessage,
          logInUser,
          signUpUser,
          logOutUser,
        }}
      >
        {children}
      </userAuthContext.Provider>
    </>
  );
}

export const useUserAuth = () => {
  return useContext(userAuthContext);
};
