import {addDoc, collection, updateDoc, doc} from "firebase/firestore";

export const createUser = async (db, collectionName, newData) => {
  const res = await addDoc(collection(db, collectionName), newData);
  return res;
};

export const updateUser = async (db, collectionName, id, updatedData) =>
  await updateDoc(doc(db, collectionName, id), updatedData);
