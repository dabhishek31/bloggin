import React from "react";
import CustomBox from "components/common/box";
import CustomTypography from "components/common/typography";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import SizedBox from "components/common/sizedbox";

const Socialmedia = () => {
  return (
    <CustomBox
      styles={{
        mt: 2,
      }}
    >
      <CustomTypography styles={{ fontSize: "18px" }}>
        You can also reach out to us by -
      </CustomTypography>
      <SizedBox size={2} />
      <CustomBox styles={{ display: "flex", alignItems: "center" }}>
        <WhatsAppIcon sx={{ fontSize: 60, color: "#25D366" }} /> &nbsp;
        <CustomTypography styles={{ fontSize: 16, color: "#25D366 " }}>
          +91-7278103575
        </CustomTypography>
      </CustomBox>
      <SizedBox size={0.5} />
      <CustomBox styles={{ display: "flex", alignItems: "center" }}>
        <FacebookIcon sx={{ fontSize: 60, color: "#4267B2" }} /> &nbsp;
        <CustomTypography styles={{ fontSize: 16, color: "#4267B2 " }}>
          Bloggin
        </CustomTypography>
      </CustomBox>
    </CustomBox>
  );
};

export default Socialmedia;
