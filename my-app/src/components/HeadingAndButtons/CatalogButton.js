import {Button, Stack} from "@mui/material";
import {Link} from "react-router-dom";
const CatalogButton = ({user}) => {
  const buttonOneText = user ? "profile" : "login";
  const buttonTwoText = user ? "create-class" : "register";
  return (
    <Stack sx={{pt: 4}} direction="row" spacing={2} justifyContent="center">
      <Button variant="contained" component={Link} to={"/" + buttonOneText}>
        {buttonOneText}
      </Button>
      <Button variant="outlined" component={Link} to={"/" + buttonTwoText}>
        {buttonTwoText}
      </Button>
    </Stack>
  );
};

export default CatalogButton;
