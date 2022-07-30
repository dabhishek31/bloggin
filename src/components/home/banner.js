import CustomBox from "../common/box";
import React from "react";
import { Container, useTheme } from "@mui/material";
import bannerIllustration from "../../assets/images/banner_illustration.png";
import CustomImage from "../common/image";
import CustomTypography from "../common/typography";
import SizedBox from "../common/sizedbox";

const Banner = () => {
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
            width: "60%",
          }}
        >
          <CustomTypography
            styles={{
              fontSize: "96px",
              fontWeight: "500",
            }}
          >
            Hakuna Matata
          </CustomTypography>
          <CustomTypography
            styles={{
              fontSize: "16px",
              color: "#2B2B2B",
            }}
          >
            Occaecat magna reprehenderit mollit elit do sunt veniam. In non
            nostrud non amet magna adipisicing sunt ipsum. Officia qui irure
            officia Lorem mollit minim enim cillum amet elit eiusmod magna amet
            aliquip.
          </CustomTypography>
          <SizedBox size={2} />
          <CustomBox
            needRadius
            styles={{
              background: theme.palette.primary.tertiary,
              padding: "12px 20px",
              cursor: "pointer",
              width: "fit-content",
            }}
          >
            <CustomTypography
              styles={{
                fontWeight: 500,
              }}
            >
              Get Started
            </CustomTypography>
          </CustomBox>
        </CustomBox>

        <CustomImage
          src={bannerIllustration}
          customStyles={{
            position: "absolute",
            height: "524.56px",
            width: "386px",
            top: 0,
            right: 0,
          }}
        />
      </Container>
    </CustomBox>
  );
};

export default Banner;
