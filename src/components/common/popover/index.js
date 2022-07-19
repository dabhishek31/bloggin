import { Popover, Typography } from "@mui/material";
import React from "react";
import CustomTypography from "../typography";

const CustomPopover = ({
  text = "Coming Soon",
  id,
  open,
  anchorEl,
  handleClose,
}) => {
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <CustomTypography styles={{ p: 2 }}>{text}</CustomTypography>
    </Popover>
  );
};

export default CustomPopover;
