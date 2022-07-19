import React from "react";
import { Box } from "@mui/system";

const SizedBox = ({ size = 1 }) => {
  return <Box sx={{ p: size }}></Box>;
};

export default SizedBox;
