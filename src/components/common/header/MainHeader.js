import React from "react";
import { Drawer, Toolbar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/LibraryBooks";

import { Search, SearchIconWrapper, StyledInputBase } from "./HeaderStyles";
import DarkLightMode from "../mode/DarkLightMode";
import CustomPopover from "../popover";

const pages = ["Podcasts", "Marketplace", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const MainHeader = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchor, setAnchor] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    setAnchor((prev) => !prev);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setAnchor(false);
  };

  return (
    <Toolbar disableGutters>
      <AdbIcon
        sx={{ display: { xs: "none", sm: "flex", md: "flex" }, mr: 1 }}
      />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex", sm: "flex" },
          fontFamily: "typography.body1",
          fontWeight: 500,
          letterSpacing: ".05rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Bloggin
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
      </Box>
      <AdbIcon sx={{ display: { xs: "flex", sm: "none", md: "none" } }} />
      <Box sx={{ m: 1, display: { xs: "flex", sm: "none", md: "none" } }}>
        <DarkLightMode />
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", sm: "flex", md: "flex" },
          flexDirection: "row-reverse",
        }}
      >
        {pages.map((page) => (
          <>
            <Button key={page} variant="button" onClick={handleClick}>
              {page}
            </Button>
            <CustomPopover
              id={id}
              open={open}
              anchorEl={anchorEl}
              handleClose={handleClose}
            />
          </>
        ))}
      </Box>
      <Search sx={{ display: { sm: "block", xs: "none" } }}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <Drawer anchor={"left"} open={anchor}>
        <Box sx={{ m: 2 }}>
          List Items to come here
          <Button
            variant="contained"
            sx={{ m: 2 }}
            onClick={() => {
              handleCloseNavMenu();
            }}
          >
            Close
          </Button>
        </Box>
      </Drawer>
    </Toolbar>
  );
};

export default MainHeader;
