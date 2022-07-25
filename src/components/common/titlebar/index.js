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
        width: { sm: "100%" },
        marginBottom: "16px",
      }}
    >
      <CustomTypography
        styles={{
          fontWeight: 500,
        }}
      >
        {text}
      </CustomTypography>
    </CustomBox>
  );
};

export default TitleBar;
