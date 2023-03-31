import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
const CatalogButton = ({user}) => {
  //if user is true
  const buttonOneText = user ? "my catalog" : "login";
  const buttonTwoText = user ? "create class" : "register";
  return (
    <>
      <Link to={"/" + buttonOneText} style={{textDecoration: "none"}}>
        <Button variant="contained">{buttonOneText}</Button>
      </Link>{" "}
      <Link to={"/" + buttonTwoText} style={{textDecoration: "none"}}>
        <Button variant="outlined">{buttonTwoText}</Button>
      </Link>
    </>
  );
};

export default CatalogButton;
