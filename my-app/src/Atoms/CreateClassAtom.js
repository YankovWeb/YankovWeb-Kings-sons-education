import {TextField, Button, styled, Typography, Container} from "@mui/material";

const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
});

// setting fieldsets
const StyledTextField = styled(TextField)({
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

const FormContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  marginTop: "2rem",
  padding: "1rem",
  border: "1px solid #ccc",
  borderRadius: "10px",
});

//Start of the componnent

const CreateClassAtom = ({formData, handleFormChange, handleSubmit}) => {
  return (
    <FormContainer maxWidth="sm">
      <Typography variant="h4" align="center">
        Add a new Class
      </Typography>
      <Typography variant="body1" align="center">
        Fill out the form below to add a new Class.
      </Typography>
      <StyledForm>
        <StyledTextField
          id="image"
          name="image"
          label="Image URL"
          type="url"
          value={formData?.image || ""}
          onChange={handleFormChange}
          margin="normal"
          variant="outlined"
          fullWidth
          rows={2}
        />
        <StyledTextField
          id="video"
          name="video"
          label="YouTube-Link"
          type="text"
          value={formData?.video || ""}
          onChange={handleFormChange}
          margin="normal"
          variant="outlined"
          fullWidth
          multiline
          rows={1}
        />
        <StyledTextField
          id="heading"
          name="heading"
          label="Heading"
          type="text"
          value={formData?.heading || ""}
          onChange={handleFormChange}
          margin="normal"
          variant="outlined"
          fullWidth
        />

        <StyledTextField
          id="description"
          name="description"
          label="Description"
          type="text"
          value={formData?.description || ""}
          onChange={handleFormChange}
          margin="normal"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </StyledForm>
    </FormContainer>
  );
};

export default CreateClassAtom;
