import React, { useState, useContext } from "react";
import { FormControlLabel, Typography } from "@mui/material";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import ColorModeContext from "../../../context/theme/index";
import { TopHeaderContainer, MaterialUISwitch } from "./HeaderStyles";
import { useTheme } from "@mui/material/styles";

const TopHeader = () => {
  const theme = useTheme();
  const [currentMode, setMode] = useState("Light");
  const colorMode = useContext(ColorModeContext);
  return (
    <TopHeaderContainer>
      <Typography
        variant="body2"
        sx={{
          color: theme.palette.text.primary,
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        <LocalCafeIcon fontSize="small" />
        &nbsp;Buy me a coffee
      </Typography>
      <FormControlLabel
        control={<MaterialUISwitch sx={{ m: 0 }} defaultChecked={false} />}
        label={<Typography variant="body2">{currentMode + " Mode"}</Typography>}
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
    </TopHeaderContainer>
  );
};

export default TopHeader;
