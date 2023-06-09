import {useState} from "react";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";

import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import classes from "./ResponsiveAppBar.module.css";
import {useUserAuth} from "../../context/AuthContext";
import {useNavigate} from "react-router";
import {NavLink} from "react-router-dom";

const ResponsiveAppBar = () => {
  const pages = ["home", "catalog", "login", "register"];
  const pagesLogIn = ["home", "catalog", "create-class"];
  const settings = ["Profile", "My-likes", "My-Products"];

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();
  const {user, logOutUser, loading} = useUserAuth();

  const handleLogout = async () => {
    try {
      await logOutUser();
      navigate("/home");
    } catch (error) {
      alert(error.message);
    }
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  console.log();
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{display: {xs: "none", md: "flex"}, mr: 1}} />
          <Box sx={{flexGrow: 1, display: {xs: "flex", md: "none"}}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {xs: "block", md: "none"},
              }}
            >
              {user && !loading
                ? pagesLogIn.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <NavLink to={`/${page}`} style={{textDecoration: "none"}}>
                        <Typography textAlign="center">{page}</Typography>
                      </NavLink>
                    </MenuItem>
                  ))
                : pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <NavLink to={`/${page}`} style={{textDecoration: "none"}}>
                        <Typography textAlign="center">{page}</Typography>
                      </NavLink>
                    </MenuItem>
                  ))}
            </Menu>
          </Box>
          <AdbIcon sx={{display: {xs: "flex", md: "none"}, mr: 1}} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: {xs: "flex", md: "none"},
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box sx={{flexGrow: 1, display: {xs: "none", md: "flex"}}}>
            {!user && !loading
              ? pages.map((page) => (
                  <NavLink
                    key={page}
                    style={{textDecoration: "none"}}
                    to={`/${page}`}
                    className={({isActive}) =>
                      isActive ? classes.active : undefined
                    }
                  >
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{my: 2, color: "white", display: "block"}}
                    >
                      {page}
                    </Button>
                  </NavLink>
                ))
              : pagesLogIn.map((page) => (
                  <NavLink
                    key={page}
                    to={`${page}`}
                    style={{textDecoration: "none"}}
                    className={({isActive}) =>
                      isActive ? classes.active : undefined
                    }
                  >
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{my: 2, color: "white", display: "block"}}
                    >
                      {page}
                    </Button>
                  </NavLink>
                ))}
          </Box>
          {user && (
            <Box sx={{flexGrow: 0}}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{mt: "45px"}}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <NavLink
                      to={`/${setting}`}
                      style={{textDecoration: "none"}}
                    >
                      <Typography textAlign="center">{setting}</Typography>
                    </NavLink>
                  </MenuItem>
                ))}
                <MenuItem
                  onClick={() => {
                    handleCloseUserMenu();
                    handleLogout();
                  }}
                >
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
