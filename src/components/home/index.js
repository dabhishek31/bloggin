import { Container } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import CustomTypography from "../common/typography";
import CustomBox from "../common/box";
import CustomImage from "../common/image";
import PrimaryPost from "../common/primarypost";
import SecondaryPost from "../common/secondarypost";
import SizedBox from "../common/sizedbox";
import TitleBar from "../common/titlebar";
import MostRecentPosts from "./mostRecentPosts";
import MostPopularPosts from "./mostPopularPosts";
import PrimaryPostsContainer from "./primaryPostsContainer";

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

      {/* Most Recent Posts */}
      <MostRecentPosts />
      <SizedBox size={8} />
    </Container>
  );
};

export default Home;
