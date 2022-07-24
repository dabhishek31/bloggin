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
import { useNavigate } from "react-router-dom";
import { Search, SearchIconWrapper, StyledInputBase } from "./HeaderStyles";
import DarkLightMode from "../mode/DarkLightMode";
import CustomPopover from "../popover";
import CustomBox from "../box";
import CustomImage from "../image";
import Logo from "../../../assets/bloggin_logo.png";

const pages = ["Marketplace", "About", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const MainHeader = () => {
  let navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    if (event.target.innerText == "ABOUT") {
      navigate("/about");
      return;
    }
    if (event.target.innerText == "BLOG") {
      navigate("/");
      return;
    }
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
      <Box
        sx={{ flexGrow: 1, display: { xs: "flex", sm: "flex", md: "none" } }}
      >
        <DarkLightMode />
        <IconButton
          size="large"
          aria-label="account of current user"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", sm: "none", md: "flex" },
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
