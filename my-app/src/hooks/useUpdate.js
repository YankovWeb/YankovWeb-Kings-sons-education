import {useState} from "react";
import {toast} from "react-toastify";
import {db} from "../config/firebase";
import {updateCollectionItem} from "../serivces/products/productService";

const useUpdate = (collectionName) => {
  const [isSuccess, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const updateOne = async (id, updatedData) => {
    setLoading(true);
    try {
      await toast.promise(
        updateCollectionItem(db, collectionName, id, updatedData),
        {
          pending: "Working ot the task..",
          success: "Success! 👌",
          error: "Someting got wron🤯",
        }
      );
      setSuccess(true);
      setLoading(false);
    } catch (error) {
      setErrorMessage(() => error.message);
      toast.error(errorMessage.message);
      setLoading(false);
    }
  };

  return {
    updateOne,
    loading,
    isSuccess,
  };
};

export default useUpdate;
