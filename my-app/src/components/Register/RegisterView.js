import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import {NavLink, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useUserAuth} from "../../context/AuthContext";
import {useFireStoreUser} from "../../context/UserContext";
import AlertLogInRegister from "../Alert/AlertLogInRegister";
import Copyright from "../../Atoms/CoppyRigth";

const RegisterView = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setuserName] = useState("");
  const {signUp} = useUserAuth();
  const {addData} = useFireStoreUser();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await signUp(email, password);

      const obj = {
        userName: userName,
        email: response.user.email,
        creatAt: response.user.metadata.creationTime,
        lastSignIn: response.user.metadata.lastSignInTime,
        id: response.user.uid,
      };
      await addData(obj);
      navigate("/home");
    } catch (err) {
      setError(err.code);
    }
  };

  const onEmailCHangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordCHangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const onUserNameCHangeHandler = (e) => {
    setuserName(e.target.value);
  };
  const onCloseErrorHandler = () => {
    setError(false);
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
        {error && (
          <AlertLogInRegister
            onCloseErrorHandler={onCloseErrorHandler}
            error={error}
          />
        )}
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
                onChange={onUserNameCHangeHandler}
                value={userName}
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
                onChange={onEmailCHangeHandler}
                value={email}
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
                onChange={onPasswordCHangeHandler}
                value={password}
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
