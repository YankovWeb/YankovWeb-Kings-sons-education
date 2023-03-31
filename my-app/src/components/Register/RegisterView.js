import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AlertLogInRegister from "../Alert/AlertLogInRegister";

import Copyright from "../../Atoms/CoppyRigth";
import {NavLink, useNavigate} from "react-router-dom";
import useShowAlert from "../../hooks/useShowAlert";
import {useUserAuth} from "../../context/AuthContext";
import {useFireStoreUser} from "../../context/UserContext";
import useFormData from "../../hooks/useFormData";

const RegisterView = () => {
  const [formData, handleFormChange] = useFormData();
  const {signUpUser, errorMessage: authError} = useUserAuth();
  const {addData} = useFireStoreUser();
  const [showModal, setShowModal, onCloseErrorHandler] = useShowAlert();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    debugger;
    e.preventDefault();

    try {
      const response = await signUpUser(formData);

      const obj = {
        userName: formData.userName,
        email: response.user.email,
        creatAt: response.user.metadata.creationTime,
        lastSignIn: response.user.metadata.lastSignInTime,
        id: response.user.uid,
      };
      await addData(obj);
      navigate("/home");
    } catch (err) {
      setShowModal(true);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{m: 1, bgcolor: "secondary.main"}}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>

        <AlertLogInRegister
          onCloseErrorHandler={onCloseErrorHandler}
          showModal={showModal}
          error={authError}
        />

        <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="userName"
                label="User Name"
                name="UserName"
                autoComplete="UserName"
                onChange={handleFormChange}
                value={formData.userName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleFormChange}
                value={formData.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={handleFormChange}
                value={formData.password}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{mt: 3, mb: 2}}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <NavLink
                to="/login"
                style={{textDecoration: "none", color: "blue"}}
              >
                Already have an account? Sign in
              </NavLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{mt: 5}} />
    </Container>
  );
};
export default RegisterView;
