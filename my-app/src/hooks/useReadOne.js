import {useState} from "react";

import {db} from "../config/firebase";
import {readOneProduct} from "../serivces/products/productService";
import {transformObjectToArrayWithId} from "../serivces/helpers/objToArrayWithId";
const useReadOne = () => {
  const [oneProduct, setOneProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const collectionName = "products";

  const readOne = async (id) => {
    setLoading(true);
    try {
      const response = await readOneProduct(db, collectionName, id);
      setOneProduct(transformObjectToArrayWithId(response));
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return {
    readOne,
    oneProduct,
    loading,
    error,
  };
};

export default useReadOne;
