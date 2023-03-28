import React from "react";
import Alert from "@mui/material/Alert";
const AlertLogInRegister = ({error, onCloseErrorHandler}) => {
  return (
    <div>
      {error && (
        <Alert
          variant="outlined"
          onClose={onCloseErrorHandler}
          severity="error"
        >
          {error}
        </Alert>
      )}
      {error === "succes" && (
        <Alert
          variant="outlined"
          severity="success"
          onClose={onCloseErrorHandler}
        >
          This is a success alert — check it out!
        </Alert>
      )}
    </div>
  );
};

export default AlertLogInRegister;
