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
              justifyContent: "center",
            }}
          >
            <FacebookIcon />
            <SizedBox />
            <TwitterIcon />
            <SizedBox />
            <InstagramIcon />
            <SizedBox />
            <YouTubeIcon />
          </CustomBox>
          <SizedBox />
          <CustomBox
            styles={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CustomTypography>Home</CustomTypography>
            <SizedBox />
            <CustomTypography>Blogs</CustomTypography>
            <SizedBox />
            <CustomTypography>Services</CustomTypography>
            <SizedBox />
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
