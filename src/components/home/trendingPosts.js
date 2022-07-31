import React from "react";
import { Container } from "@mui/material";
import CustomBox from "../common/box";
import CustomImage from "../common/image";
import PostCard from "../common/postcard";
import SizedBox from "../common/sizedbox";
import CustomTypography from "../common/typography";

import trendingLogo from "../../assets/images/trending.png";

const TrendingPosts = () => {
  return (
    <Container
      fixed
      sx={{
        pl: "0 !important",
        pr: "0 !important",
        mt: 6,
      }}
    >
      <CustomBox styles={{ display: "inline-flex", alignItems: "center" }}>
        <CustomImage
          src={trendingLogo}
          styles={{ height: "20px", width: "20px" }}
        />
        <SizedBox size={0.5} />
        <CustomTypography>Trending posts</CustomTypography>
      </CustomBox>

      <CustomBox
        styles={{
          p: 1,
          mt: "12px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "40px",
        }}
      >
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </CustomBox>
    </Container>
  );
};

export default TrendingPosts;
