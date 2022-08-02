import { ThemeContext } from "@emotion/react";
import { Divider, useTheme } from "@mui/material";
import React from "react";
import CustomBox from "../common/box";
import SizedBox from "../common/sizedbox";
import CustomTypography from "../common/typography";

const options = [
  "Technology",
  "Life",
  "Health",
  "Sustainable Lifestyle",
  "Politics",
  "Artificial Inteligence",
  "Javascript",
  "Shopping",
];

const InterestSelection = () => {
  const theme = useTheme();
  return (
    <CustomBox styles={{ ml: { xs: 3, md: 6 } }}>
      <CustomTypography
        styles={{
          fontSize: "16px",
        }}
      >
        Select Your Interest Areas
      </CustomTypography>
      <SizedBox />
      <CustomBox
        styles={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {options.map((item) => (
          <CustomTypography
            styles={{
              color: theme.palette.primary.main,
              border: "1px solid " + theme.palette.primary.main,
              mr: 2,
              mb: 2,
              width: "auto",
              padding: "10px 20px",
            }}
          >
            {item}
          </CustomTypography>
        ))}
      </CustomBox>
      <SizedBox />
      <Divider sx={{ display: { xs: "none", sm: "none" } }} />
    </CustomBox>
  );
};

export default InterestSelection;
