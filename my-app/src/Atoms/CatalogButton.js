import React from "react";
import Button from "@mui/material/Button";
import {NavLink} from "react-router-dom";
const CatalogButton = ({user}) => {
  const buttonOneText = user ? "my catalog" : "login";
  const buttonTwoText = user ? "create class" : "register";
  return (
    <>
      <NavLink to={"/" + buttonOneText}>
        <Button variant="contained">{buttonOneText}</Button>
      </NavLink>{" "}
      <NavLink to={"/" + buttonTwoText}>
        <Button variant="outlined">{buttonTwoText}</Button>
      </NavLink>
    </>
  );
};

export default CatalogButton;
