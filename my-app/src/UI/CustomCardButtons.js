import React from "react";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";
const CustonCardButtons = ({card, user, children}) => {
  return (
    <>
      <Button
        variant="contained"
        size="small"
        component={Link}
        to={"/catalog/view"}
      >
        View
      </Button>
      {user?.uid === card.ownerId && (
        <>
          <Button size="small" variant="contained" component={Link} to="/">
            Edit
          </Button>
          {children}
        </>
      )}
    </>
  );
};

export default CustonCardButtons;
