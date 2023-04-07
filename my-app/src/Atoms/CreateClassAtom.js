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
  console.count("a");
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
          margin="normal"
          variant="outlined"
          fullWidth
          rows={4}
          value={formData?.image || ""}
          onChange={(e) => {
            handleFormChange(e);
          }}
          helperText={
            formData?.image?.length > 50
              ? formData?.image.slice(0, 50) + "..."
              : ""
          }
        />
        <StyledTextField
          id="video"
          name="video"
          label="Video-Link"
          type="text"
          margin="normal"
          variant="outlined"
          fullWidth
          multiline
          rows={1}
          value={formData?.video || ""}
          onChange={(e) => {
            handleFormChange(e);
          }}
          helperText={
            formData?.video?.length > 50
              ? formData?.video.slice(0, 50) + "..."
              : ""
          }
        />
        <StyledTextField
          id="heading"
          name="heading"
          label="Heading"
          type="text"
          margin="normal"
          variant="outlined"
          value={formData?.heading || ""}
          onChange={(e) => {
            handleFormChange(e);
          }}
          helperText={
            formData?.heading?.length > 50
              ? formData?.heading.slice(0, 50) + "..."
              : ""
          }
        />

        <StyledTextField
          id="description"
          name="description"
          label="Description"
          type="text"
          margin="normal"
          variant="outlined"
          multiline
          rows={4}
          value={formData?.description || ""}
          onChange={(e) => {
            handleFormChange(e);
          }}
          helperText={
            formData?.description?.length > 50
              ? formData?.description.slice(0, 50) + "..."
              : ""
          }
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
