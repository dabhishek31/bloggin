import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import CustomBox from "../box";

export default function CircularLoader() {
  return (
    <CustomBox
      styles={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "80vh",
        alignItems: "center",
      }}
    >
      <CircularProgress
        sx={{
          color: "#40798C",
        }}
      />
    </CustomBox>
  );
}
