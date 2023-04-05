import {useState} from "react";
import {toast} from "react-toastify";
import {db} from "../config/firebase";
import {createProdutItem} from "../serivces/products/productService";

const useCreate = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const collectionName = "products";

  const patern = /\.(jpg|jpeg|png|webp|avif|gif|svg)$/;
  const isImage = (url) => patern.test(url);

  const createOne = async (newData) => {
    setLoading(true);

    try {
      if (!isImage(newData.image)) {
        toast.error("Url is invalid, place provide valid Url");
        throw new Error();
      }
      if (newData.heading.length < 5) {
        toast.error("Heading must be more than 5 symbols");
        throw new Error();
      }
      if (newData.description.length <= 20) {
        toast.error("Heading must be more than 20 symbols");
        throw new Error();
      }

      await toast.promise(createProdutItem(db, collectionName, newData), {
        pending: "Creating your Class",
        success: "Created! 👌",
        error: "Someting got wron🤯",
      });
      setLoading(false);
    } catch (error) {
      setError(true);
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
