import React from "react";
import { Container, Divider } from "@mui/material";
import CustomBox from "../common/box";
import HorizontalPosts from "./horizontalPosts";
import InterestSelection from "./interestSelection";
import SizedBox from "../common/sizedbox";
import CustomTypography from "../common/typography";

const VerticalPosts = () => {
  return (
    <Container
      fixed
      sx={{
        pl: "0 !important",
        pr: "0 !important",
        mt: { md: 6 },
      }}
    >
      <CustomBox styles={{ display: { xs: "block", sm: "block", md: "none" } }}>
        <InterestSelection />
        <Divider />
        <SizedBox size={2} />
      </CustomBox>
      <CustomBox styles={{ display: { xs: "block", sm: "block", md: "flex" } }}>
        <CustomBox
          styles={{
            flex: 1.5,
            mt: 1,
            mr: { xs: 0, sm: 0, md: 2 },
            ml: { xs: 3, sm: 0, md: 0 },
          }}
        >
          <CustomTypography
            styles={{
              fontSize: "16px",
              ml: { xs: 0, sm: 3, md: 2 },
            }}
          >
            More Posts
          </CustomTypography>
          <SizedBox size={1} />
          <HorizontalPosts />
          <HorizontalPosts />
          <HorizontalPosts />
        </CustomBox>
        <CustomBox
          styles={{ display: { xs: "none", sm: "none", md: "block" }, flex: 1 }}
        >
          <InterestSelection />
        </CustomBox>
      </CustomBox>
    </Container>
  );
};

export default VerticalPosts;
