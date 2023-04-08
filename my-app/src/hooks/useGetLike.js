import {collection, query, where, getDocs} from "firebase/firestore";
import {db} from "../config/firebase";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {useUserAuth} from "../context/AuthContext";

const useGetLike = () => {
  const {user} = useUserAuth();
  const [likedProducts, setLikedProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getLikedProducts = async () => {
      setLoading(true);
      try {
        if (user) {
          const likedProductsQuery = query(
            collection(db, "products"),
            where("likes", "array-contains", user?.uid)
          );
          const snapshot = await toast.promise(getDocs(likedProductsQuery), {
            pending: "Loading...",

            error: "Someting got wron🤯",
          });
          const likedProductsData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setLikedProducts(likedProductsData);
        }
        setLoading(false);
      } catch (error) {
        toast(error.massage);
        setLoading(false);
      }
    };
    getLikedProducts();
  }, [user]);

  return {
    loading,
    likedProducts,
  };
};

export default useGetLike;
