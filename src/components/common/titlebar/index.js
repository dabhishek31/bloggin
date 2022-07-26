import React from "react";
import CustomBox from "../box";
import CustomTypography from "../typography";

const TitleBar = ({ text = "" }) => {
  return (
    <CustomBox
      needBackground
      needShadow
      needRadius
      styles={{
        p: 1,
        marginBottom: "16px",
        width: { xs: "fit-content", sm: "auto", md: "auto", xl: "auto" },
      }}
    >
      <CustomTypography
        styles={{
          fontWeight: 500,
          pl: 1,
          pr: 1,
        }}
      >
        {text}
      </CustomTypography>
    </CustomBox>
  );
};

export default TitleBar;
