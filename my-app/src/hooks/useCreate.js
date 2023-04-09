import {useState} from "react";
import {toast} from "react-toastify";
import {db} from "../config/firebase";
import {createProdutItem} from "../serivces/products/productService";
import {isImage} from "../serivces/validate/isImage";
import {isLink} from "../serivces/validate/isLink";

const useCreate = () => {
  const [isSuccess, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const collectionName = "products";

  const unfold = () => {
    setSuccess(false);
  };
  const createOne = async (newData) => {
    setLoading(true);

    try {
      if (!isImage(newData.image)) {
        toast.error("Url must end with jpg,jpeg,png,webp,avif,gif or svg!");
        throw new Error(
          "Url must end with jpg, jpeg, png, webp ,avif ,gif or svg!"
        );
      }
      if (!isLink(newData.video)) {
        toast.error(
          "You must provide a video link starting with http or https!"
        );
        throw new Error(
          "You must provide a video link starting with http or https!"
        );
      }
      if (newData.heading.length < 5) {
        toast.error("Heading must be more than 5 symbols!");
        throw new Error("Heading must be more than 5 symbols!");
      }
      if (newData.description.length <= 20) {
        toast.error("Description must be more than 20 symbols!");
        throw new Error("Description must be more than 20 symbols!");
      }

      await toast.promise(createProdutItem(db, collectionName, newData), {
        pending: "Creating your Class",
        success: "Created! 👌",
        error: "Someting got wrong🤯",
      });
      setSuccess(true);
      setLoading(false);
      setErrorMessage("");
    } catch (e) {
      console.log(e.message);
      setErrorMessage(e.code ? e.code.slice(5) : e.message);
      setError(true);
      setLoading(false);
    }
  };

  return {
    createOne,
    loading,
    error,
    isSuccess,
    unfold,
    errorMessage,
  };
};

export default useCreate;
