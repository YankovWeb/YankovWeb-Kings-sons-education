import {useState} from "react";
import classes from "./ResponsiveAppBar.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

import {useUserAuth} from "../../context/AuthContext";
import {useNavigate} from "react-router";
import {NavLink} from "react-router-dom";

const ResponsiveAppBar = () => {
  const pages = ["Login", "register", "home", "catalog"];
  const pagesLogIn = ["home", "catalog", "my catalog", "create class"];
  const settings = ["Profile", "Dashboard"];

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();
  const {logOut, user} = useUserAuth();

  const handleLogout = async () => {
    try {
      await logOut();
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

  return (
    <AppBar position="static">
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
            ></Menu>
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
          >
            LOGO
          </Typography>
          <Box sx={{flexGrow: 1, display: {xs: "none", md: "flex"}}}>
            {!user
              ? pages.map((page) => (
                  <NavLink
                    style={{textDecoration: "none"}}
                    to={`/${page}`}
                    className={({isActive}) =>
                      isActive ? classes.active : undefined
                    }
                  >
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{my: 2, color: "white", display: "block"}}
                    >
                      {page}
                    </Button>
                  </NavLink>
                ))
              : pagesLogIn.map((page) => (
                  <NavLink
                    to={`${page}`}
                    style={{textDecoration: "none"}}
                    className={({isActive}) =>
                      isActive ? classes.active : undefined
                    }
                  >
                    <Button
                      key={page}
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
                {" "}
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
