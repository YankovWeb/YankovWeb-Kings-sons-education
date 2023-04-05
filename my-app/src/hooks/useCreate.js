import {useState} from "react";
import {toast} from "react-toastify";
import {db} from "../config/firebase";
import {createProdutItem} from "../serivces/products/productService";

const useCreate = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({isTrue: false, message: ""});
  const collectionName = "products";

  const createOne = async (newData) => {
    setLoading(true);
    try {
      await toast.promise(createProdutItem(db, collectionName, newData), {
        pending: "Creating your Class",
        success: "Created! 👌",
        error: "Someting got wron🤯",
      });
      setLoading(false);
    } catch (error) {
      setError({isTrue: true, message: error});
      setLoading(false);
    }
  };

  return {
    createOne,
    loading,
    error,
  };
};

export default useCreate;
