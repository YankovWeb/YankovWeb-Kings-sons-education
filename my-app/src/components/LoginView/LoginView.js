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
import {useUserAuth} from "../../context/AuthContext";
import useFormData from "../../hooks/useFormData";
import Copyright from "../../Atoms/CoppyRigth";
import ImageGrid from "../../Atoms/ImageGrid";
import Loader from "../../UI/Loader";
//get from context useSignIn
//get from context Auth
//if auth not render the this
//use signIn from context

const LoginView = () => {
  const [formData, handleFormChange] = useFormData({
    email: "",
    password: "",
  });

  const {logInUser, loading} = useUserAuth();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    const response = await logInUser(formData);
    if (response !== null) {
      navigate("/Profile");
    }
  };
  if (loading) {
    return <Loader />;
  }

  return (
    <Grid container component="main" sx={{height: "93.6vh"}}>
      <CssBaseline />
      <ImageGrid />
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
          <Box component="form" noValidate onSubmit={onSubmit} sx={{mt: 1}}>
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
