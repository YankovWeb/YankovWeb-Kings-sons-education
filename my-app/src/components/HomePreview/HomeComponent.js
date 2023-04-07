import {useEffect} from "react";
import {Grid, Container} from "@mui/material";
import useReadAll from "../../hooks/useReadAll";
import {ButtonBases} from "../../Atoms/ButtonBases";
import Loader from "../../UI/Loader";

const HomeComponent = () => {
  const {allProducts, readAll, loading} = useReadAll();

  // Set the `isSubtitleVisible` state to true after a delay
  useEffect(() => {
    const getAll = async () => {
      await readAll();
    };
    getAll();
  }, [readAll]);

  return (
    <>
      {loading && <Loader />}
      <h1 style={{textAlign: "center"}}>
        Find or Create your Free Study Material and courses
      </h1>{" "}
      <Container sx={{py: 8}} maxWidth="lg">
        <Grid container spacing={4}>
          <ButtonBases allProducts={allProducts} />
        </Grid>
      </Container>
    </>
  );
};

export default HomeComponent;
