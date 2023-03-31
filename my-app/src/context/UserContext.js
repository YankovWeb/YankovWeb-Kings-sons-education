import {createContext, useState, useEffect, useContext} from "react";
import {collection, doc, onSnapshot, deleteDoc} from "firebase/firestore";
import {db} from "../config/firebase";
import {useUserAuth} from "../context/AuthContext";
import {createUser, updateUser} from "../serivces/user/UserService";
const FirestoreContext = createContext();

export const FirestoreContextUsersProvider = ({children}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const {user} = useUserAuth();

  const collectionName = "users";

  const getUserData = () => {
    const currentUser = data.filter(
      (userInData) => userInData.id === user?.uid
    );

    return currentUser[0];
  };

  const addData = async (newData) => {
    try {
      setLoading(true);
      const docRef = await createUser(db, collectionName, newData);
      setData([...data, {id: docRef.id, ...newData}]);
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
      const updatedArray = data.map((item) =>
        item.id === id ? {...item, ...updatedData} : item
      );
      setData(updatedArray);
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
      const filteredArray = data.filter((item) => item.id !== id);
      setData(filteredArray);
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
        setData(dataArray);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <FirestoreContext.Provider
      value={{
        data,
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
