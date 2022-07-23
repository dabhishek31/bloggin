import React from "react";
import { Typography, useTheme } from "@mui/material";

const CustomTypography = ({
  children,
  variant = "body1",
  styles = { display: "inline-flex", alignItems: "center" },
}) => {
  const theme = useTheme();
  console.log(styles);
  return (
    <Typography
      variant={variant}
      flexWrap={true}
      sx={{
        color: theme.palette.text.primary,
        fontSize: {
          xs: theme.typography.caption.fontSize,
          sm: theme.typography.body2.fontSize,
          md: theme.typography.body2.fontSize,
          lg: theme.typography.body1.fontSize,
          ...styles.fontSize,
        },
        fontFamily: theme.typography.fontFamily,
        ...styles,
      }}
    >
      {children}
    </Typography>
  );
};

export default CustomTypography;
