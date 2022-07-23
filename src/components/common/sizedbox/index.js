import React from "react";
import { Box } from "@mui/system";

const SizedBox = ({ size = 1, height = "1px", width = "1px" }) => {
  return <Box sx={{ p: size, height: height, width: width }}></Box>;
};

export default SizedBox;
