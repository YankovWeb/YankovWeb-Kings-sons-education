import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import {Box, Button} from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Copyright from "../../Atoms/CoppyRigth";
import CatalogButton from "../../Atoms/CatalogButton";
import {useEffect} from "react";
import useReadAll from "../../hooks/useReadAll";
import {useUserAuth} from "../../context/AuthContext";
import CustomCard from "../../UI/CustomCard";
import CustomCardButtons from "../../UI/CustomCardButtons";
import CatalogHeader from "../../Atoms/CatalogHeader";
import useDeleteOne from "../../hooks/useDeleteOne";
import Loader from "../../UI/Loader";
const ItemsView = () => {
  const {allProducts, readAll, loading} = useReadAll();
  const {user} = useUserAuth();
  const {deleteOne, isDeleteClick} = useDeleteOne();

  useEffect(() => {
    const getAll = async () => {
      await readAll();
    };
    getAll();
  }, [readAll, isDeleteClick]);

  console.log("HomeView");
  //fix the inline css to a styled componnent.
  //important!  bring the bissnes logic here.
  //fix re rendering of avata becouse context calls

  return (
    <div>
      <CssBaseline />

      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <CatalogHeader />
            <CatalogButton user={user} />
          </Container>
        </Box>
        <Container sx={{py: 8}} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {/*  Map Over All products and use Composition to give a prop and content*/}
            {loading && <Loader />}
            {allProducts.map((card) => (
              <CustomCard key={card.id} card={card}>
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
      </main>
      {/* Footer */}
      <Box sx={{bgcolor: "background.paper", p: 6}} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Tank You
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </div>
  );
};

export default ItemsView;
