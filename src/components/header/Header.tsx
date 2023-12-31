import React from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";

import { useDispatch, useSelector } from "react-redux";
import { store } from "../../store/store.js";
import { logout } from "../../store/slices/auth.ts";
import { currUserActions } from "../../store/slices/currUser.ts";

const Header = () => {
  // type RootState = ReturnType<typeof appStore.getState>;

  const isLoggedIn = useSelector((state: any) => state.auth.value);

  const currUser = useSelector((state: any) => state.currUser);
  console.log(currUser);


  const dispatch = useDispatch();

  const exitClickhandler = () => {
    dispatch(logout());
    dispatch(currUserActions.setCurrUser(null));
    window.location.reload();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Toponym UA
          </Typography>

          {isLoggedIn ? (
            <>
              <Avatar
                sx={{ bgcolor: deepOrange[500] }}
                alt="Remy Sharp"
                src="/broken-image.jpg"
              >
                {currUser?.firstname && currUser.firstname[0]}
              </Avatar>
              <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                <Button
                  onClick={exitClickhandler}
                  color="inherit"
                  style={{ textDecoration: "none" }}
                >
                  Вийти
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <Button color="inherit">Увійти</Button>
              </Link>
              <Link
                to="/registration"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <Button color="inherit" style={{ textDecoration: "none" }}>
                  Зареєструватися
                </Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
