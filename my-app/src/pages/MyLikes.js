import {collection, query, where, getDocs} from "firebase/firestore";
import {db} from "../config/firebase";
import {useEffect, useState} from "react";
import CustomCard from "../UI/CustomCard";
import {Button, Grid, CssBaseline, Container} from "@mui/material";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";
import {useUserAuth} from "../context/AuthContext";
import Loader from "../UI/Loader";
const MyLikes = () => {
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
            success: "Your Liked Videos! 👌",
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
        toast(error.masage);
        setLoading(false);
      }
    };
    getLikedProducts();
  }, [user]);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <CssBaseline />
      <Container sx={{py: 8}} maxWidth="lg">
        <Grid container spacing={4}>
          {likedProducts.map((product) => (
            <CustomCard key={product.id} card={product}>
              <Button
                variant="contained"
                size="small"
                component={Link}
                to={`/catalog/view/${product?.id}`}
              >
                View
              </Button>
            </CustomCard>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default MyLikes;
