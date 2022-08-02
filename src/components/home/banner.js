import CustomBox from "../common/box";
import React from "react";
import { Container, useTheme } from "@mui/material";
import bannerIllustration from "../../assets/images/banner_illustration.png";
import CustomImage from "../common/image";
import CustomTypography from "../common/typography";
import SizedBox from "../common/sizedbox";
import PrimaryButton from "components/common/primaryBtn";

const Banner = ({ heading = "", shortDesc = "", hideBtn = false }) => {
  const theme = useTheme();
  return (
    <CustomBox
      styles={{
        height: "420px",
        // outline: "solid 1px red",
        background: "linear-gradient(135deg, #79B4B7 0%, #FEFBF3 100%)",
        borderRadius: "0px 0px 208px 0px",
        borderBottom: "17px solid #F8F0DF",
      }}
    >
      <Container
        fixed
        sx={{
          position: "relative",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          pl: "0 !important",
        }}
      >
        <CustomBox
          styles={{
            width: { xs: "90%", md: "60%" },
            margin: { xs: "0 auto", md: "0" },
          }}
        >
          <CustomTypography
            styles={{
              fontSize: { xs: "60px", md: "96px" },
              fontWeight: "500",
              lineHeight: "100%",
            }}
          >
            {heading}
          </CustomTypography>
          <SizedBox />
          <CustomTypography
            styles={{
              fontSize: "16px",
              color: "#2B2B2B",
            }}
          >
            {shortDesc}
          </CustomTypography>
          <SizedBox size={2} />
          {!hideBtn && <PrimaryButton text="Get Started" />}
        </CustomBox>

        <CustomImage
          src={bannerIllustration}
          customStyles={{
            position: "absolute",
            height: "524.56px",
            width: "386px",
            top: 0,
            right: 0,
            [theme.breakpoints.down("md")]: {
              display: "none",
            },
          }}
        />
      </Container>
    </CustomBox>
  );
};

export default Banner;
