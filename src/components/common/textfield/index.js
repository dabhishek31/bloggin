import React from "react";
import { TextField } from "@mui/material";

const CustomTextField = ({ id, label, styles, rows = 0 }) => {
  return (
    <TextField
      id={id || ""}
      label={label}
      variant="standard"
      multiline={rows !== 0}
      rows={rows}
      sx={{ width: "100%", ...styles }}
    />
  );
};

export default CustomTextField;
