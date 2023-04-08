import CustomCard from "../UI/CustomCard";
import {Button, Grid, CssBaseline, Container} from "@mui/material";
import {Link} from "react-router-dom";

import useGetLike from "../hooks/useGetLike";

const MyLikes = () => {
  const {likedProducts} = useGetLike();

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
