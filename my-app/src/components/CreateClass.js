import {useState} from "react";

import {TextField, Button, styled, Typography, Container} from "@mui/material";

import useProducts from "../hooks/useProducts";

import {useUserAuth} from "../context/AuthContext";

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

const CreateClass = () => {
  const [values, setValues] = useState({
    image: "",
    heading: "",
    description: "",
    ownerId: "",
  });
  const {createOne, loading, error} = useProducts();

  const {user} = useUserAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setValues((prev) => ({...prev, ownerId: user.uid}));
    await createOne(values);
    // TODO: handle form submission
  };

  const handleChange = (event) => {
    const {name, value} = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <FormContainer maxWidth="xl">
      <Typography variant="h4" align="center">
        Add a new Class
      </Typography>
      <Typography variant="body1" align="center">
        Fill out the form below to add a new Class.
      </Typography>
      <StyledForm onSubmit={handleSubmit}>
        <StyledTextField
          id="image"
          name="image"
          label="Image URL"
          type="url"
          value={values.image}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          fullWidth
          rows={2}
        />
        <StyledTextField
          id="heading"
          name="heading"
          label="Heading"
          type="text"
          value={values.heading}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <StyledTextField
          id="heading"
          name="heading"
          label="Heading"
          type="text"
          value={values.heading}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <StyledTextField
          id="heading"
          name="heading"
          label="Heading"
          type="text"
          value={values.heading}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <StyledTextField
          id="heading"
          name="heading"
          label="Heading"
          type="text"
          value={values.heading}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <StyledTextField
          id="description"
          name="description"
          label="Description"
          type="text"
          value={values.description}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </StyledForm>
    </FormContainer>
  );
};

export default CreateClass;
