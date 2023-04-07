import {Container, Button, CssBaseline, Grid, Typography} from "@mui/material";
import Copyright from "../../Atoms/Copyright";
import {useEffect, useState} from "react";
import useReadAll from "../../hooks/useReadAll";
import {useUserAuth} from "../../context/AuthContext";
import CustomCard from "../../UI/CustomCard";
import CustomCardButtons from "../../UI/CustomCardButtons";
import useDeleteOne from "../../hooks/useDeleteOne";
import Loader from "../../UI/Loader";
import HeadingAndButtons from "../HeadingAndButtons/HeadingAndButtons";
import useUpdate from "../../hooks/useUpdate";
import {arrayUnion, arrayRemove} from "firebase/firestore";
import LikeButton from "./LikeButton";

const collectionName = "products";

const ItemsView = () => {
  const {user} = useUserAuth();
  const {allProducts, readAll, loading} = useReadAll();
  const {deleteOne, isDeleteClick} = useDeleteOne();
  const {updateOne} = useUpdate(collectionName);
  const [like, setLike] = useState(true);

  const onClick = async (cardId, likes) => {
    if (likes?.includes(user?.uid)) {
      await updateOne(cardId, {
        likes: arrayRemove(user.uid),
      });
      setLike(false);
      return;
    }
    await updateOne(cardId, {likes: arrayUnion(user.uid)});
    setLike(false);
  };

  useEffect(() => {
    readAll();
    setLike(true);
  }, [readAll, isDeleteClick, like]);

  return (
    <div>
      <CssBaseline />
      {loading && <Loader />}
      <HeadingAndButtons user={user} />
      <main>
        <Container sx={{py: 8}} maxWidth="lg">
          <Grid container spacing={4}>
            {/*  Map Over All products and use Composition to give a prop and content*/}
            {allProducts.map((card) => (
              <CustomCard key={card.id} card={card}>
                <LikeButton
                  user={user}
                  card={card}
                  onClick={onClick}
                  like={like}
                />
                <Typography variant="h6">{` Likes :${
                  card.likes?.length ? card.likes?.length : 0
                }`}</Typography>
                <CustomCardButtons card={card} user={user}>
                  <Button
                    color="error"
                    size="small"
                    variant="contained"
                    onClick={() => deleteOne(card.id)}
                  >
                    Delete
                  </Button>
                </CustomCardButtons>
              </CustomCard>
            ))}
          </Grid>
        </Container>
        <Copyright />
      </main>
    </div>
  );
};

export default ItemsView;
