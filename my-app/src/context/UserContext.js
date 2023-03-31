import {createContext, useState, useEffect, useContext} from "react";
import {collection, doc, onSnapshot, deleteDoc} from "firebase/firestore";
import {db} from "../config/firebase";
import {useUserAuth} from "../context/AuthContext";
import {createUser, updateUser} from "../serivces/user/userService";
//create a new context object for Firestore data
const FirestoreContext = createContext();
//create a provider component
export const FirestoreContextUsersProvider = ({children}) => {
  //Declare state
  const [usersCollection, setUsersCollection] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  //get current logged-in user from AuthContext
  const {user} = useUserAuth();

  //Note: the user collection
  const collectionName = "users";
  // A function that retrieves the currently logged-in user's data from the usersCollection state
  //update with useCallBack
  const getUserData = () => {
    const [currentUser] = usersCollection.filter(
      (userInData) => userInData.id === user?.uid
    );

    return currentUser;
  };
  // A function that adds a new document to the Firestore collection

  const addData = async (newData) => {
    try {
      setLoading(true);
      const docRef = await createUser(db, collectionName, newData);
      setUsersCollection([...usersCollection, {id: docRef.id, ...newData}]);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
      throw new Error("Error adding document: ", error);
    }
  };

  const updateData = async (id, updatedData) => {
    try {
      setLoading(true);
      await updateUser(db, collectionName, id, updatedData);
      const updatedArray = usersCollection.map((item) =>
        item.id === id ? {...item, ...updatedData} : item
      );
      setUsersCollection(updatedArray);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
      throw new Error("Error updating document: ", error);
    }
  };

  const deleteData = async (id) => {
    try {
      setLoading(true);
      await deleteDoc(doc(db, collectionName, id));
      const filteredArray = usersCollection.filter((item) => item.id !== id);
      setUsersCollection(filteredArray);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
      throw new Error("Error deleting document: ", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, collectionName),
      (querySnapshot) => {
        const dataArray = [];
        querySnapshot.forEach((doc) => {
          dataArray.push({id: doc.id, ...doc.data()});
        });
        setUsersCollection(dataArray);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <FirestoreContext.Provider
      value={{
        usersCollection,
        loading,
        error,
        getUserData,
        addData,
        updateData,
        deleteData,
      }}
    >
      {children}
    </FirestoreContext.Provider>
  );
};
export function useFireStoreUser() {
  return useContext(FirestoreContext);
}
