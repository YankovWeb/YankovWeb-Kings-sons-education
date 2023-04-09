import {useEffect} from "react";
import {Grid, Container, Typography} from "@mui/material";
import useReadAll from "../../hooks/useReadAll";
import {ButtonBases} from "./ButtonBases";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const HomeComponent = () => {
  const {allProducts, readAll} = useReadAll();

  // Set the `isSubtitleVisible` state to true after a delay
  useEffect(() => {
    const getAll = async () => {
      await readAll();
    };
    getAll();
  }, [readAll]);

  return (
    <>
      <Typography variant="h3" sx={{textAlign: "center", py: 8}}>
        Find or Create your Free Study Material and courses
      </Typography>{" "}
      <Container sx={{py: 8}} maxWidth="lg">
        <Grid container spacing={4}>
          <ButtonBases allProducts={allProducts} />
        </Grid>
        <ScrollToTop />
      </Container>
    </>
  );
};

export default HomeComponent;
