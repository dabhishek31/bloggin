import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/system";

const CustomBox = ({
  children,
  needBackground = false,
  needShadow = false,
  needRadius = false,
  styles = {},
  onClick = null,
}) => {
  const theme = useTheme();

  return (
    <Box
      onClick={onClick}
      sx={{
        background: needBackground ? theme.palette.customBackground : "",
        boxShadow: needShadow ? theme.shadows[4] : 0,
        borderRadius: needRadius ? 2 : 0,
        ...styles,
      }}
    >
      {children}
    </Box>
  );
};

export default CustomBox;
