import React from "react";
import { useTheme } from "@mui/material";
import CustomBox from "../box";
import SizedBox from "../sizedbox";
import CustomTypography from "../typography";

const rightMenuItems = [
  {
    text: "Buy me a coffee",
    click: () => {
      window.open(
        "https://buy.stripe.com/00gcPE9zG5rm58c4gg",
        "_blank" // <- This is what makes it open in a new window.
      );
    },
  },
  {
    text: "Sign In",
    click: () => {},
  },
];

const HeaderRightMenu = () => {
  const theme = useTheme();

  return (
    <CustomBox
      styles={{
        display: "flex",
        // outline: "solid 1px red",
        alignItems: "center",
      }}
    >
      {rightMenuItems.map((item) => (
        <CustomTypography
          onClick={item.click}
          styles={{
            fontWeight: 500,
            ml: "40px",
            cursor: "pointer",
          }}
        >
          {item.text}
        </CustomTypography>
      ))}
      <SizedBox size={2} />
      <CustomBox
        needRadius
        styles={{
          background: theme.palette.primary.tertiary,
          padding: "12px 20px",
          cursor: "pointer",
        }}
      >
        <CustomTypography
          styles={{
            fontWeight: 500,
          }}
        >
          Sign Up
        </CustomTypography>
      </CustomBox>
    </CustomBox>
  );
};

export default HeaderRightMenu;
