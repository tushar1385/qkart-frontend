import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Search } from "@mui/icons-material";
import { Avatar, Button, Stack, TextField, InputAdornment } from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import React from "react";
import "./Header.css";

const Header = ({ children, hasHiddenAuthButtons }) => {
  const history = useHistory();
  const username = localStorage.getItem("username");

  const eventLogin = () => {
    history.push("/login");
  };
  const eventRegister = () => {
    history.push("/register");
  };
  const eventLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const backToExploreButton = () => {
    history.push("/");
  };
  return (
    <Box className="header">
      <Box className="header-title">
        <img src="logo_light.svg" alt="QKart-icon"></img>
      </Box>
      {/* {children && (
        <TextField
          className="search-desktop"
          size="small"
          onChange={(e) => children.callSearchApi(e)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search color="primary" />
              </InputAdornment>
            ),
          }}
          placeholder="Search for items/categories"
          name="search"
        />
      )} */}
      {children}
      {hasHiddenAuthButtons ? (
        <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          onClick={backToExploreButton}
        >
          Back to explore
        </Button>
      ) : username ? (
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar src="/public/avatar.png" alt={username} />
          <p>{username}</p>
          <Button variant="text" onClick={eventLogout}>
            Logout
          </Button>
        </Stack>
      ) : (
        <Stack direction="row" spacing={2}>
          <Button variant="text" onClick={eventLogin}>
            Login
          </Button>
          <Button
            className="button"
            variant="contained"
            onClick={eventRegister}
          >
            Register
          </Button>
        </Stack>
      )}
    </Box>
  );
};

export default Header;
