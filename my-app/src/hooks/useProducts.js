import {useState, useEffect} from "react";
import {collection, doc, onSnapshot, deleteDoc} from "firebase/firestore";
import {db} from "../config/firebase";
import {
  readAllProducts,
  transformObjectToArrayWithId,
} from "../serivces/products/productService";

const useProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const collectionName = "products";

  const readAll = async () => {
    setLoading(true);
    try {
      const response = await readAllProducts(db, collectionName);
      const dataArray = transformObjectToArrayWithId(response);
      setAllProducts(dataArray);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const readOne = async (id) => {
    setLoading(true);
    try {
      const docRef = doc(db, collectionName, id);
      const docSnapshot = await docRef.get();
      const data = {id: docSnapshot.id, ...docSnapshot.data()};
      setLoading(false);
      return data;
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const createOne = async (data) => {
    setLoading(true);
    try {
      const docRef = await collection(db, collectionName).add(data);
      const newData = {id: docRef.id, ...data};
      setAllProducts([...allProducts, newData]);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const updateOne = async (id, updatedData) => {
    setLoading(true);
    try {
      const docRef = doc(db, collectionName, id);
      await docRef.update(updatedData);
      const updatedArray = allProducts.map((item) =>
        item.id === id ? {...item, ...updatedData} : item
      );
      setAllProducts(updatedArray);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const deleteOne = async (id) => {
    setLoading(true);
    try {
      await deleteDoc(doc(db, collectionName, id));
      const filteredArray = allProducts.filter((item) => item.id !== id);
      setAllProducts(filteredArray);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
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
        setAllProducts(dataArray);
      }
    );

    return () => unsubscribe();
  }, []);

  return {
    allProducts,
    loading,
    error,
    readAll,
    readOne,
    createOne,
    updateOne,
    deleteOne,
  };
};

export default useProducts;
