import { Container } from "@mui/material";
import React from "react";
import CustomBox from "../box";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SizedBox from "../sizedbox";
import CustomTypography from "../typography";

const Footer = () => {
  return (
    <>
      <CustomBox
        needBackground
        styles={{
          p: 3,
        }}
      >
        <Container fixed>
          <CustomBox
            styles={{
              display: "flex",
              justifyContent: "space-evenly",
              width: { xs: "80%", sm: "60%", md: "30%" },
              margin: "0 auto",
            }}
          >
            <FacebookIcon
              sx={{
                color: "text.primary",
              }}
            />
            <TwitterIcon
              sx={{
                color: "text.primary",
              }}
            />
            <InstagramIcon
              sx={{
                color: "text.primary",
              }}
            />
            <YouTubeIcon
              sx={{
                color: "text.primary",
              }}
            />
          </CustomBox>
          <SizedBox />
          <CustomBox
            styles={{
              display: "flex",
              justifyContent: "space-evenly",
              width: { xs: "100%", sm: "60%", md: "40%" },
              margin: "0 auto",
            }}
          >
            <CustomTypography>Home</CustomTypography>
            <CustomTypography>Blogs</CustomTypography>
            <CustomTypography>Services</CustomTypography>
            <CustomTypography>Privay Policy</CustomTypography>
          </CustomBox>
        </Container>
      </CustomBox>
      <CustomBox
        styles={{
          p: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CustomTypography>Bloggin &#169; 2022</CustomTypography>
      </CustomBox>
    </>
  );
};

export default Footer;
