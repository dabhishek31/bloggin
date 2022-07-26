import React from "react";
import { Box, Typography } from "@mui/material";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import { TopHeaderContainer } from "./HeaderStyles";
import { useTheme } from "@mui/material/styles";
import LoginIcon from "@mui/icons-material/Login";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DarkLightMode from "../mode/DarkLightMode";
import SizedBox from "../sizedbox";
import CustomTypography from "../typography";

const TopHeader = () => {
  const theme = useTheme();
  return (
    <TopHeaderContainer>
      {/* <Typography
        variant="body2"
        sx={{
          color: theme.palette.text.primary,
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        <AddCircleIcon fontSize="small" />
        &nbsp;Sign Up
      </Typography> */}
      {/* <Box sx={{ m: 1 }}></Box>
      <Typography
        variant="body2"
        sx={{
          color: theme.palette.text.primary,
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        <LoginIcon fontSize="small" />
        &nbsp;Sign In
      </Typography> */}
      <Box sx={{ m: 1 }}></Box>
      <CustomTypography
        onClick={() =>
          window.open(
            "https://buy.stripe.com/00gcPE9zG5rm58c4gg",
            "_blank" // <- This is what makes it open in a new window.
          )
        }
        variant="body2"
        styles={{
          color: theme.palette.text.primary,
          display: "inline-flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <LocalCafeIcon fontSize="small" />
        &nbsp;Buy me a coffee
      </CustomTypography>
      <SizedBox size={0.5} />
      <DarkLightMode />
    </TopHeaderContainer>
  );
};

export default TopHeader;
