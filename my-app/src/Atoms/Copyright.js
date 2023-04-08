import {Typography, Link} from "@mui/material";

const Copyright = () => (
  <Typography variant="body2" color="text.secondary" align="center">
    {"Copyright © "}
    <Link color="inherit" href="#">
      King Sons Edication
    </Link>
    {new Date().getFullYear()}
  </Typography>
);

export default Copyright;
