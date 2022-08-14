/* eslint-disable array-callback-return */
import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Button from "@mui/material/Button";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import "./sample.css";
import { useNavigate } from "react-router";

export const DrawerAppBar = () => {
  const nav = useNavigate();
  const navdata = [
    { list: "Home", routepath: "/home", icon: <HomeRoundedIcon /> },
    { list: "Login", routepath: "/login", icon: <LoginRoundedIcon /> },
  ];
  const [drawer, setDrawer] = React.useState(false);
  const handleToggle = () => setDrawer(true);
  const handleClose = () => setDrawer(false);
  return (
    <MuiThemeProvider>
      <AppBar
        position="static"
        style={{
          background: "rgba(112, 108, 108, 0.5)",
          boxShadow: "none",
        }}
        zDepth={10}
        title="Demo App"
        iconElementLeft={
          <MenuOutlinedIcon
            fontSize="large"
            onClick={handleToggle}
            className="mt-1 ms-2"
            style={{ cursor: "pointer", color: "white" }}
          />
        }
      />

      <Drawer style={{ backgroundcolor: "red" }} open={drawer} width={300}>
        <Button onClick={handleClose}>
          <ArrowBackOutlinedIcon fontSize="large" />
        </Button>
        {navdata.map((item) => (
          <MenuItem onClick={() => nav(item.routepath)}>
            <span className="me-3" style={{color:"#0d1139"}}>{item.icon}</span>
            {item.list}
          </MenuItem>
        ))}
      </Drawer>
    </MuiThemeProvider>
  );
};
