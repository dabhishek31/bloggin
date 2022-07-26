import { Button, Divider } from "@mui/material";
import React from "react";
import CustomBox from "../box";
import CustomTypography from "../typography";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import CustomPopover from "../popover";
import SizedBox from "../sizedbox";

const pages = ["Blog", "About"]; // "Marketplace",

const Sidebar = () => {
  let navigate = useNavigate();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    console.log(event.target.innerText.toLowerCase(), "== about");
    console.log(event.target.innerText.toLowerCase().trim() === "about");
    if (event.target.innerText.toLowerCase().trim() == "about") {
      navigate("/about");
      return;
    }
    if (event.target.innerText.toLowerCase().trim() == "blog") {
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

  return (
    <CustomBox styles={{ width: "100%" }}>
      <CustomTypography
        styles={{
          fontSize: 18,
        }}
      >
        Menu
      </CustomTypography>
      <SizedBox size={0.5} />
      <Divider />
      <SizedBox />

      <CustomBox
        styles={{
          //   flexGrow: 1,
          display: { xs: "block", sm: "block" },
          //   flexDirection: "row-reverse",
        }}
      >
        {pages.map((page) => (
          <CustomBox key={page}>
            <CustomTypography
              onClick={handleClick}
              styles={{
                color: theme.palette.text.primary,
                display: "inline-flex",
                alignItems: "center",
                cursor: "pointer",
                fontSize: 16,
              }}
            >
              <LocalCafeIcon fontSize="small" />
              &nbsp;{page}
            </CustomTypography>

            <SizedBox size={0.5} />
          </CustomBox>
        ))}
      </CustomBox>
      <SizedBox size={0.5} />
      <Divider />
      <SizedBox size={0.5} />

      <CustomTypography
        onClick={() =>
          window.open(
            "https://buy.stripe.com/00gcPE9zG5rm58c4gg",
            "_blank" // <- This is what makes it open in a new window.
          )
        }
        styles={{
          color: theme.palette.text.primary,
          display: "inline-flex",
          alignItems: "center",
          cursor: "pointer",
          fontSize: 16,
        }}
      >
        <LocalCafeIcon fontSize="small" />
        &nbsp;Buy me a coffee
      </CustomTypography>
    </CustomBox>
  );
};

export default Sidebar;
