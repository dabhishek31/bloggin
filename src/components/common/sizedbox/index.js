import React from "react";
import { Box } from "@mui/system";

const SizedBox = ({ size = 1, height = "1px", width = "1px", styles = {} }) => {
  return <Box sx={{ p: size, height: height, width: width, ...styles }}></Box>;
};

export default SizedBox;
