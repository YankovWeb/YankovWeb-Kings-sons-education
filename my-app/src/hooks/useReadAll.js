import {useState, useCallback} from "react";

import {db} from "../config/firebase";
import {readAllProducts} from "../serivces/products/productService";
const useReadAll = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const collectionName = "products";

  const readAll = useCallback(async () => {
    setLoading(true);
    try {
      const response = await readAllProducts(db, collectionName);

      setAllProducts(response);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, []);

  return {
    readAll,
    allProducts,
    loading,
    error,
  };
};

export default useReadAll;
