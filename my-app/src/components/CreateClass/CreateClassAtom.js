import {Button, Typography} from "@mui/material";
import * as S from "./Styles";

const CreateClassAtom = ({formData, handleFormChange, handleSubmit}) => (
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
      <S.StyledTextField
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
      <S.StyledTextField
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

      <S.StyledTextField
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
    </S.StyledForm>
  </S.FormContainer>
);

export default CreateClassAtom;
