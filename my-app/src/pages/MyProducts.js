import CustomCardButtons from "../components/Card/CustomCardButtons";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import HeadingAndButtons from "../components/HeadingAndButtons/HeadingAndButtons";
import useGetUserProducts from "../hooks/useGetUserProducts";

import {
  Box,
  Container,
  CssBaseline,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import useDeleteOne from "../hooks/useDeleteOne";
import {useUserAuth} from "../context/AuthContext";
import CustomCard from "../components/Card/CustomCard";

const MyProducts = () => {
  const {user} = useUserAuth();
  const {deleteOne, isDeleteClick} = useDeleteOne();
  const {loading, userProducts} = useGetUserProducts(isDeleteClick);

  return (
    <>
      <CssBaseline />
      {!loading && <HeadingAndButtons user={user} />}

      <main>
        <Container sx={{py: 8}} maxWidth="lg">
          <Grid container spacing={4}>
            {/*  Map Over All products and use Composition to give a prop and content*/}
            {userProducts.map((card) => (
              <CustomCard key={card.id} card={card}>
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

export default MyProducts;
