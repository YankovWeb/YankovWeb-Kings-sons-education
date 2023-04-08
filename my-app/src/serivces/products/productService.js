import {
  getDocs,
  getDoc,
  addDoc,
  collection,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

export const readAllProducts = async (db, collectionName) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  return querySnapshot.docs.map((doc) => {
    return {id: doc.id, ...doc.data()};
  });
};

export const readOneProduct = async (db, collectionName, id) => {
  const docSnapshot = await getDoc(doc(db, collectionName, id));
  return {id: docSnapshot.id, ...docSnapshot.data()};
};

export const createProdutItem = async (db, collectionName, newData) => {
  const docRef = await addDoc(collection(db, collectionName), newData);
  return {id: docRef.id, docRef};
};

export const updateCollectionItem = async (
  db,
  collectionName,
  id,
  updatedData
) => await updateDoc(doc(db, collectionName, id), updatedData);

export const deleteColectionItem = async (db, collectionName, id) =>
  await deleteDoc(doc(db, collectionName, id));
