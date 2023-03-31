import {async} from "@firebase/util";
import {
  addDoc,
  collection,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

export const transformObjectToArrayWithId = (response) => {
  const arrayWithId = Object.entries(response).map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return arrayWithId;
};

export const readAllProducts = async (db, collectionName) => {
  return await collection(db, collectionName).get();
};

export const createProdutItem = async (db, collectionName, newData) => {
  await addDoc(collection(db, collectionName), newData);
};

export const updateCollectionItem = async (
  db,
  collectionName,
  id,
  updatedData
) => await updateDoc(doc(db, collectionName, id), updatedData);

export const deleteColectionItem = async (
  db,
  collectionName,
  id,
  updatedData
) => await deleteDoc(db, collectionName, id, updatedData);
