import {
  getDocs,
  getDoc,
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
  return await getDocs(collection(db, collectionName));
};
export const readOneProduct = async (db, collectionName, id) => {
  const docSnapshot = await getDoc(doc(db, collectionName, id));
  const data = {id: docSnapshot.id, ...docSnapshot.data()};
  return data;
};

export const createProdutItem = async (db, collectionName, newData) => {
  const docRef = await addDoc(collection(db, collectionName), newData);
  const documentData = {id: docRef.id, docRef};
  return documentData;
};

export const updateCollectionItem = async (
  db,
  collectionName,
  id,
  updatedData
) => await updateDoc(doc(db, collectionName, id), updatedData);

export const deleteColectionItem = async (db, collectionName, id) =>
  await deleteDoc(doc(db, collectionName, id));
