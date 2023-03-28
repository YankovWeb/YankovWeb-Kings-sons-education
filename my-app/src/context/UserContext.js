import {createContext, useState, useEffect, useContext} from "react";
import {
  collection,
  doc,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import {firestore} from "./firebaseConfig";

const FirestoreContext = createContext();

export const FirestoreProvider = ({children}) => {
  const [data, setData] = useState([]);
  const colectionName = "users";
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(firestore, colectionName),
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

  const addData = async (newData) => {
    try {
      const docRef = await addDoc(
        collection(firestore, colectionName),
        newData
      );
      setData([...data, {id: docRef.id, ...newData}]);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const updateData = async (id, updatedData) => {
    try {
      await updateDoc(doc(firestore, colectionName, id), updatedData);
      const updatedArray = data.map((item) =>
        item.id === id ? {...item, ...updatedData} : item
      );
      setData(updatedArray);
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  const deleteData = async (id) => {
    try {
      await deleteDoc(doc(firestore, colectionName, id));
      const filteredArray = data.filter((item) => item.id !== id);
      setData(filteredArray);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  return (
    <FirestoreContext.Provider
      value={{
        data,
        addData,
        updateData,
        deleteData,
      }}
    >
      {children}
    </FirestoreContext.Provider>
  );
};
export function useFireStoreUserAuth() {
  return useContext(FirestoreContext);
}
