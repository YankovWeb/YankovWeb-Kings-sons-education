import {
  addDoc,
  collection,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

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
