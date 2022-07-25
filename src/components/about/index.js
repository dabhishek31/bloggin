import { Container } from "@mui/material";
import React from "react";
import SizedBox from "../common/sizedbox";
import useDocumentTitle from "../../hooks/useTitle";
import CustomBox from "../common/box";
import CustomTypography from "../common/typography";

const About = () => {
  useDocumentTitle("About | Find out more about us");
  return (
    <Container fixed>
      <SizedBox />
      <CustomBox
        styles={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "70vh",
          alignItems: "center",
        }}
      >
        <CustomTypography
          styles={{
            fontSize: "20px",
          }}
        >
          Coming Soon
        </CustomTypography>
      </CustomBox>
      <SizedBox />
    </Container>
  );
};

export default About;
