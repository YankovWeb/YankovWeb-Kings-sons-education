import Avatar from "@mui/material/Avatar";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

import {useNavigate, NavLink} from "react-router-dom";

import AlertLogInRegister from "../Alert/AlertLogInRegister";

import {useUserAuth} from "../../context/AuthContext";
import useFormData from "../../hooks/useFormData";
import Copyright from "../../Atoms/CoppyRigth";
import useShowAlert from "../../hooks/useShowAlert";
//get from context useSignIn
//get from context Auth
//if auth not render the this
//use signIn from context

const LoginView = () => {
  const [formData, handleFormChange] = useFormData();
  const [showModal, setShowModal, onCloseErrorHandler] = useShowAlert();
  const {logInUser, error, errorMessage} = useUserAuth();

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await logInUser(formData);

      navigate("/profile");
    } catch (erro) {
      setShowModal(true);
    }
  };

  console.log(error, showModal);
  return (
    <Grid container component="main" sx={{height: "93.6vh"}}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage:
            "url(https://cdn.dribbble.com/users/2486875/screenshots/5534832/education.gif)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{m: 1, bgcolor: "secondary.main"}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" sx={{mt: 1}}>
            <AlertLogInRegister
              onCloseErrorHandler={onCloseErrorHandler}
              error={errorMessage}
              showModal={showModal}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleFormChange}
              value={formData.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleFormChange}
              value={formData.password}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{mt: 3, mb: 2}}
              onClick={onSubmit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>

              <Grid item>
                <NavLink
                  to="/register"
                  style={{textDecoration: "none", color: "blue"}}
                >
                  {"Don't have an account? Sign Up"}
                </NavLink>
              </Grid>
            </Grid>
            <Copyright sx={{mt: 5}} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default LoginView;
