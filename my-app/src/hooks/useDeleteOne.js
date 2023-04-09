import {useEffect, useState} from "react";
import {db} from "../config/firebase";
import {deleteColectionItem} from "../serivces/products/productService";
import {toast} from "react-toastify";

const useDeleteOne = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isDeleteClick, setIsDeleteClick] = useState(false);
  const collectionName = "products";

  const deleteOne = async (id) => {
    setLoading(true);

    try {
      if (
        window.confirm(
          "Are you sure you want to DELETE? This action is PERMANENT and cannot be UNDONE."
        )
      ) {
        await toast.promise(deleteColectionItem(db, collectionName, id), {
          pending: "Deleting...",
          success: "Class is Deleted! 👌",
          error: "Someting got wron🤯",
        });
        setIsDeleteClick(true);
        setLoading(false);
      } else {
        return;
      }
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    setIsDeleteClick(false);
  }, [isDeleteClick]);

  return {
    deleteOne,
    loading,
    error,
    isDeleteClick,
  };
};

export default useDeleteOne;
