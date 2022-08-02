import { useTheme } from "@mui/material";
import React from "react";
import CustomBox from "../box";
import CustomTypography from "../typography";

const PrimaryButton = ({ text = "" }) => {
  const theme = useTheme();
  return (
    <CustomBox
      needRadius
      styles={{
        background: theme.palette.primary.tertiary,
        padding: "12px 20px",
        cursor: "pointer",
        width: "fit-content",
      }}
    >
      <CustomTypography
        styles={{
          fontWeight: 500,
        }}
      >
        {text}
      </CustomTypography>
    </CustomBox>
  );
};

export default PrimaryButton;
