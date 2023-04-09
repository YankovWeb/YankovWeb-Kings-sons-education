import {useEffect, useState} from "react";
import {
  Box,
  Container,
  CssBaseline,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import {arrayUnion, arrayRemove} from "firebase/firestore";

import useDeleteOne from "../../hooks/useDeleteOne";
import useReadAll from "../../hooks/useReadAll";
import {useUserAuth} from "../../context/AuthContext";
import useUpdate from "../../hooks/useUpdate";

import CustomCard from "../Card/CustomCard";
import CustomCardButtons from "../Card/CustomCardButtons";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import HeadingAndButtons from "../HeadingAndButtons/HeadingAndButtons";
import LikeButton from "./LikeButton";

//collection name
const collectionName = "products";

const ItemsView = () => {
  const {user} = useUserAuth();
  const {allProducts, readAll} = useReadAll();
  const {deleteOne, isDeleteClick} = useDeleteOne();
  const {updateOne} = useUpdate(collectionName);
  const [like, setLike] = useState(true);

  const onClick = async (cardId, likes) => {
    if (likes?.includes(user?.uid)) {
      await updateOne(cardId, {
        likes: arrayRemove(user?.uid),
      });
      setLike(false);
      return;
    }
    await updateOne(cardId, {likes: arrayUnion(user?.uid)});
    setLike(false);
  };

  useEffect(() => {
    readAll();
    setLike(true);
  }, [readAll, isDeleteClick, like]);

  return (
    <>
      <CssBaseline />
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
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Typography variant="h6">
                    {card.likes?.length ? card.likes?.length : 0}
                  </Typography>
                  <Box sx={{fontSize: 16, color: "text.secondary"}}>
                    <Typography variant="subtitle2">
                      {card.likes?.length === 1 ? "Like" : "Likes"}
                    </Typography>
                  </Box>
                </Stack>
                <CustomCardButtons
                  card={card}
                  user={user}
                  deleteItem={deleteOne}
                />
              </CustomCard>
            ))}
          </Grid>
        </Container>
        <ScrollToTop />
      </main>
    </>
  );
};

export default ItemsView;
