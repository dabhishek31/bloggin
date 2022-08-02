import React from "react";
import CustomBox from "components/common/box";
import { Container, TextField, useTheme } from "@mui/material";
import CustomTextField from "components/common/textfield";
import SizedBox from "components/common/sizedbox";
import Banner from "components/home/banner";
import PrimaryButton from "components/common/primaryBtn";
import Socialmedia from "./socialmedia";

const ContactUs = () => {
  const theme = useTheme();
  return (
    <CustomBox>
      <Banner
        heading="Contact us"
        shortDesc="Send us your query and we will get back to you asap"
        hideBtn
      />
      <Container fixed>
        <CustomBox
          styles={{
            display: { xs: "block", sm: "block", md: "flex" },
            justifyContent: "space-between",
            mt: 4,
          }}
        >
          <CustomBox
            styles={{
              display: { xs: "none", sm: "none", md: "block" },
              flex: 1,
            }}
          >
            <Socialmedia />
          </CustomBox>
          <SizedBox
            size={3}
            styles={{
              display: { xs: "none", sm: "none", md: "block" },
            }}
          />

          <CustomBox styles={{ mt: 0, flex: 2 }}>
            <SizedBox />
            <CustomTextField label={"Enter name"} />
            <SizedBox />
            <CustomTextField label={"Enter email address"} />
            <SizedBox />
            <CustomTextField label="Enter query here" rows={4} />
            <SizedBox />
            <PrimaryButton text="Submit" />
            <SizedBox size={2} />
          </CustomBox>
        </CustomBox>
        <CustomBox
          styles={{
            display: { xs: "block", sm: "block", md: "none" },
          }}
        >
          <Socialmedia />
          <SizedBox size={3} />
        </CustomBox>
      </Container>
    </CustomBox>
  );
};

export default ContactUs;
