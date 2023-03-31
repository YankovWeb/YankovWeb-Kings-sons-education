import {useState, useEffect} from "react";
import {collection, onSnapshot} from "firebase/firestore";

import {db} from "../config/firebase";
import {
  readAllProducts,
  readOneProduct,
  createProdutItem,
  updateCollectionItem,
  deleteColectionItem,
  transformObjectToArrayWithId,
} from "../serivces/products/productService";

const useProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [oneProduct, setOneProduct] = useState({});
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
      const response = await readOneProduct(db, collectionName, id);
      setOneProduct(response);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const createOne = async (newData) => {
    setLoading(true);
    try {
      const newDataResponse = await createProdutItem(
        db,
        collectionName,
        newData
      );
      setAllProducts([...allProducts, newDataResponse]);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const updateOne = async (id, updatedData) => {
    setLoading(true);
    try {
      await updateCollectionItem(db, collectionName, id, updatedData);

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
      await deleteColectionItem(db, collectionName, id);
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
    oneProduct,
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
