import React from "react";
import {Grid} from "@mui/material";

const ImageGrid = () => (
  <Grid
    item
    xs={false}
    sm={4}
    md={7}
    sx={{
      backgroundImage:
        "url(https://cdn.dribbble.com/users/2486875/screenshots/5534832/education.gif)",
      backgroundRepeat: "no-repeat",
      backgroundColor: (t) =>
        t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />
);

export default ImageGrid;
