import React from "react";
import CustomBox from "../common/box";
import SizedBox from "../common/sizedbox";
import MostRecentPosts from "./mostRecentPosts";
import MostPopularPosts from "./mostPopularPosts";
import PrimaryPostsContainer from "./primaryPostsContainer";
import { Container } from "@mui/material";

const Home = () => {
  return (
    <Container fixed>
      <CustomBox
        styles={{
          margin: "24px 0px",
          display: { xs: "block", sm: "flex", md: "flex" },
          justifyContent: "space-between",
        }}
      >
        <PrimaryPostsContainer />
        <MostPopularPosts />
      </CustomBox>
      <MostRecentPosts />
      <SizedBox size={8} />
    </Container>
  );
};

export default Home;
