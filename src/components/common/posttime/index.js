import React from "react";
import { useTheme } from "@mui/material";
import CustomTypography from "../typography";

const PostDateTime = () => {
  const theme = useTheme();
  return (
    <CustomTypography
      styles={{
        fontSize: "14px",
        color: theme.palette.text.disabled,
      }}
    >
      July 29 | 5 min read
    </CustomTypography>
  );
};

export default PostDateTime;
