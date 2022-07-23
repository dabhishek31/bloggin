import React, { useState, useContext } from "react";
import { FormControlLabel, Typography } from "@mui/material";
import { MaterialUISwitch } from "./ModeStyles";
import ColorModeContext from "../../../context/theme/index";

const DarkLightMode = () => {
  const [currentMode, setMode] = useState("Light");
  const colorMode = useContext(ColorModeContext);
  return (
    <FormControlLabel
      sx={{
        mr: 0,
      }}
      control={<MaterialUISwitch sx={{ m: 0 }} defaultChecked={false} />}
      //   label={<Typography variant="body2">{currentMode}</Typography>}
      onClick={() => {
        setMode(
          (() => {
            if (currentMode === "Light") {
              return "Dark";
            }
            return "Light";
          })()
        );
        colorMode.toggleColorMode();
      }}
    />
  );
};

export default DarkLightMode;
