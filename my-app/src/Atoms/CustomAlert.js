import React from "react";
import Alert from "@mui/material/Alert";
const CustomAlert = ({showModal, error, onCloseErrorHandler}) => {
  return (
    <>
      {showModal && (
        <Alert
          variant="outlined"
          onClose={onCloseErrorHandler}
          severity="error"
        >
          {error.code}
        </Alert>
      )}
    </>
  );
};

export default CustomAlert;
