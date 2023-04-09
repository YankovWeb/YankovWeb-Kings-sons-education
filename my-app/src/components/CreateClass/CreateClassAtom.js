import {Button, Typography} from "@mui/material";
import * as S from "./Styles";

const CreateClassAtom = ({
  formData,
  handleFormChange,
  handleSubmit,
  errorMessage,
}) => (
  <S.FormContainer maxWidth="sm">
    <Typography variant="h4" align="center">
      Add a new Class
    </Typography>
    <Typography variant="body1" align="center">
      Fill out the form below to add a new Class.
    </Typography>
    <S.StyledForm>
      <S.StyledTextField
        id="image"
        name="image"
        label="Image URL"
        type="url"
        margin="normal"
        variant="outlined"
        multiline
        fullWidth={true}
        rows={3}
        value={formData?.image || ""}
        onChange={(e) => {
          handleFormChange(e);
        }}
        error={errorMessage?.includes("Url")}
        helperText={errorMessage?.includes("Url") && errorMessage}
      />
      <S.StyledTextField
        id="video"
        name="video"
        label="Video-Link"
        type="text"
        margin="normal"
        variant="outlined"
        fullWidth
        multiline
        rows={3}
        value={formData?.video || ""}
        onChange={(e) => {
          handleFormChange(e);
        }}
        error={errorMessage?.includes("video")}
        helperText={errorMessage?.includes("video") && errorMessage}
      />
      <S.StyledTextField
        id="heading"
        name="heading"
        label="Heading"
        type="text"
        margin="normal"
        variant="outlined"
        rows={6}
        value={formData?.heading || ""}
        onChange={(e) => {
          handleFormChange(e);
        }}
        error={errorMessage?.includes("Heading")}
        helperText={errorMessage?.includes("Heading") && errorMessage}
      />

      <S.StyledTextField
        required
        id="description"
        name="description"
        label="Description"
        type="text"
        margin="normal"
        variant="outlined"
        multiline
        rows={6}
        value={formData?.description || ""}
        onChange={(e) => {
          handleFormChange(e);
        }}
        error={errorMessage?.includes("Description")}
        helperText={errorMessage?.includes("Description") && errorMessage}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </S.StyledForm>
  </S.FormContainer>
);

export default CreateClassAtom;
