import React from "react";
import { Container } from "@mui/material";
import CustomBox from "../common/box";
import HorizontalPosts from "./horizontalPosts";
import InterestSelection from "./interestSelection";

const VerticalPosts = () => {
  return (
    <Container
      fixed
      sx={{
        pl: "0 !important",
        pr: "0 !important",
        mt: 6,
      }}
    >
      <CustomBox styles={{ display: "flex" }}>
        <CustomBox styles={{ flex: 1.5, mt: 1, mr: 2 }}>
          <HorizontalPosts />
          <HorizontalPosts />
          <HorizontalPosts />
        </CustomBox>
        <InterestSelection />
      </CustomBox>
    </Container>
  );
};

export default VerticalPosts;
