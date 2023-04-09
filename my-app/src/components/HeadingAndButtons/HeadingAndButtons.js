import React from "react";
import CatalogButton from "./CatalogButton";
import CatalogHeader from "./CatalogHeader";
import {Box, Container} from "@mui/material";
const HeadingAndButtons = ({user}) => {
  return (
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
  );
};

export default HeadingAndButtons;
