import React from "react";
import CustomBox from "../box";
import CustomImage from "../image";
import CustomTypography from "../typography";
import BrandLogo from "../../../assets/images/brand_logo.png";
import { leftMenuItems } from "./constants";

const HeaderLeftMenu = () => {
  return (
    <CustomBox
      styles={{
        display: "flex",
        // outline: "solid 1px red",
        alignItems: "center",
      }}
    >
      <CustomImage
        src={BrandLogo}
        customStyles={{ width: "122px", cursor: "pointer" }}
      />

      {leftMenuItems.map((item) => (
        <CustomTypography
          styles={{
            fontWeight: 500,
            ml: "40px",
            cursor: "pointer",
          }}
        >
          {item.text}
        </CustomTypography>
      ))}
    </CustomBox>
  );
};

export default HeaderLeftMenu;
