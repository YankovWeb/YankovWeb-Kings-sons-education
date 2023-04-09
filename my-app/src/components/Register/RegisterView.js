import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Copyright from "../Copyrigth/Copyright";
import {NavLink, useNavigate} from "react-router-dom";
import {useUserAuth} from "../../context/AuthContext";
import useFormData from "../../hooks/useFormData";

const RegisterView = () => {
  const {formData, handleFormChange} = useFormData(null);
  const {signUpUser, errorMessage} = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await signUpUser(formData);
    if (response !== null) {
      navigate("/home");
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

        <Box component="form" onSubmit={handleSubmit} sx={{mt: 3}}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="displayName"
                label="User Name"
                name="displayName"
                autoComplete="UserName"
                onChange={handleFormChange}
                value={formData?.displayName || ""}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={
                  errorMessage.includes("email") ||
                  errorMessage.includes("user")
                }
                helperText={
                  errorMessage.includes("email") ||
                  errorMessage.includes("user")
                    ? errorMessage
                    : ""
                }
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleFormChange}
                value={formData?.email || ""}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={errorMessage.includes("password")}
                helperText={errorMessage.includes("password") && errorMessage}
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={handleFormChange}
                value={formData?.password || ""}
              />
            </Grid>
            <Grid item xs={12}></Grid>
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
