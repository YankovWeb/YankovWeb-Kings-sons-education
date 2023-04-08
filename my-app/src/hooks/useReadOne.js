import {useCallback, useEffect, useState} from "react";
import {db} from "../config/firebase";
import {readOneProduct} from "../serivces/products/productService";

const useReadOne = (id, collectionName) => {
  const [oneProduct, setOneProduct] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const readOne = useCallback(async () => {
    setLoading(true);
    try {
      const response = await readOneProduct(db, collectionName, id);
      setOneProduct(() => response);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, [id, collectionName]);

  useEffect(() => {
    readOne();
  }, [readOne]);

  return {
    oneProduct,
    loading,
    error,
  };
};

export default useReadOne;
