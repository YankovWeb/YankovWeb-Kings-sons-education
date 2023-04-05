import {useState} from "react";

import {db} from "../config/firebase";
import {updateCollectionItem} from "../serivces/products/productService";

const useUpdate = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const collectionName = "products";

  const updateOne = async (id, updatedData) => {
    setLoading(true);
    try {
      await updateCollectionItem(db, collectionName, id, updatedData);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return {
    updateOne,
    loading,
    error,
  };
};

export default useUpdate;
