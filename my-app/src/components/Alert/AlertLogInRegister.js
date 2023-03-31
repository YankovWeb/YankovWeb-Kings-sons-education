import React from "react";
import Alert from "@mui/material/Alert";
const AlertLogInRegister = ({showModal, error, onCloseErrorHandler}) => {
  return (
    <>
      {showModal && (
        <Alert
          variant="outlined"
          onClose={onCloseErrorHandler}
          severity="error"
        >
          {error}
        </Alert>
      )}
    </>
  );
};

export default AlertLogInRegister;
