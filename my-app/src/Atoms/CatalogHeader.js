import {Typography} from "@mui/material";

const CatalogHeader = () => (
  <>
    <Typography
      component="h1"
      variant="h2"
      align="center"
      color="text.primary"
      gutterBottom
    >
      Welcome
    </Typography>
    <Typography variant="h5" align="center" color="text.secondary" paragraph>
      Happy browsing
    </Typography>
  </>
);

export default CatalogHeader;
