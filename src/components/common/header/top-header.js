import React, { useState } from "react";
import { FormControlLabel } from "@mui/material";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import {
  TopHeaderContainer,
  MaterialUISwitch,
  CustomLink,
  CustomText,
} from "./header-styles";

const TopHeader = ({ themeToggler }) => {
  const [currentMode, setMode] = useState("Light");
  console.log(currentMode);
  return (
    <TopHeaderContainer>
      <CustomLink href="#" underline="none">
        <CustomText><LocalCafeIcon />&nbsp;Buy me a coffee</CustomText>
      </CustomLink>
      <FormControlLabel
        control={<MaterialUISwitch sx={{ m: 0 }} defaultChecked={false} />}
        label={currentMode + " Mode"}
        onClick={() => {
          setMode(
            (() => {
              if (currentMode === "Light") {
                return "Dark";
              }
              return "Light";
            })()
          );
          themeToggler();
        }}
      />
    </TopHeaderContainer>
  );
};

export default TopHeader;
