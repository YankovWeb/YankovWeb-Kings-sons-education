import {TextField, styled, Container} from "@mui/material";

export const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
});

// setting fieldsets
export const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#4caf50",
    },
    "&:hover fieldset": {
      borderColor: "#4caf50",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#4caf50",
    },
  },
});

export const FormContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  marginTop: "2rem",
  padding: "1rem",
  border: "1px solid #ccc",
  borderRadius: "10px",
});
