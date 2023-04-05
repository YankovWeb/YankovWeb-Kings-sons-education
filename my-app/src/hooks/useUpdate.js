import {useState} from "react";
import {toast} from "react-toastify";
import {db} from "../config/firebase";
import {updateCollectionItem} from "../serivces/products/productService";

const useUpdate = () => {
  const [isSuccess, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const collectionName = "products";
  const patern = /\.(jpg|jpeg|png|webp|avif|gif|svg)$/;
  const isImage = (url) => patern.test(url);

  const updateOne = async (id, updatedData) => {
    setLoading(true);
    try {
      if (!isImage(updatedData.image)) {
        toast.error("Url is invalid, place provide valid Url");
        throw new Error();
      }
      if (updatedData.heading.length < 5) {
        toast.error("Heading must be more than 5 symbols");
        throw new Error();
      }
      if (updatedData.description.length <= 20) {
        toast.error("Heading must be more than 20 symbols");
        throw new Error();
      }
      await toast.promise(
        updateCollectionItem(db, collectionName, id, updatedData),
        {
          pending: "Updating your Class",
          success: "Updated! 👌",
          error: "Someting got wron🤯",
        }
      );
      setSuccess(true);
      setLoading(false);
    } catch (error) {
      toast.error(errorMessage.message);
      setErrorMessage(true);
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
