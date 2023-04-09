import {useCallback, useEffect, useState} from "react";
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../config/firebase";
import {toast} from "react-toastify";
import {useUserAuth} from "../context/AuthContext";

const useGetUserProducts = (isDeleteClick) => {
  const {user} = useUserAuth();
  const [userProducts, setUserProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUserProducts = useCallback(async () => {
    setLoading(true);
    try {
      if (user) {
        const userProductsQuery = query(
          collection(db, "products"),
          where("ownerId", "==", user.uid)
        );
        const snapshot = await toast.promise(getDocs(userProductsQuery), {
          error: "Something went wrong 🤯",
        });
        const userProductsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUserProducts(userProductsData);
      }
      setLoading(false);
    } catch (error) {
      toast(error.message);
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    getUserProducts();
  }, [getUserProducts, isDeleteClick]);

  return {
    loading,
    userProducts,
    getUserProducts,
  };
};

export default useGetUserProducts;
