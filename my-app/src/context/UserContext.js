import {createContext, useState, useEffect, useContext} from "react";
import {
  collection,
  doc,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import {db} from "../config/firebase";

const FirestoreContext = createContext();

export const FirestoreContextUsersProvider = ({children}) => {
  const [data, setData] = useState([]);

  const colectionName = "users";
  console.log(data);

  const getUserData = (userId) => {
    return data.filter((user) => user.id === userId);
  };

  const addData = async (newData) => {
    try {
      const docRef = await addDoc(collection(db, colectionName), newData);
      setData([...data, {id: docRef.id, ...newData}]);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const updateData = async (id, updatedData) => {
    try {
      await updateDoc(doc(db, colectionName, id), updatedData);
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
      await deleteDoc(doc(db, colectionName, id));
      const filteredArray = data.filter((item) => item.id !== id);
      setData(filteredArray);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, colectionName),
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
