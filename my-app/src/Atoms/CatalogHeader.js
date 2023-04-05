import {memo} from "react";
import {Typography} from "@mui/material";
const CatalogHeader = () => {
  return (
    <>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Album layout
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
        Something short and leading about the collection below—its contents, the
        creator, etc. Make it short and sweet, but not too short so folks
        don&apos;t simply skip over it entirely.
      </Typography>
    </>
  );
};

export default memo(CatalogHeader);
