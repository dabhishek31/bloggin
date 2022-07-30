import React from "react";
import CustomBox from "../common/box";
import SizedBox from "../common/sizedbox";
import MostRecentPosts from "./mostRecentPosts";
import MostPopularPosts from "./mostPopularPosts";
import PrimaryPostsContainer from "./primaryPostsContainer";
import { Container, Divider, useTheme } from "@mui/material";
// import useDocumentTitle from "../../hooks/useTitle";
import Banner from "./banner";
import CustomImage from "../common/image";
import trendingLogo from "../../assets/images/trending.png";
import CustomTypography from "../common/typography";
import PostCard from "../common/postcard";
import UserView from "../common/userview";
import PostTitleShortDesc from "../common/posttitleshortdesc";
import PostDateTime from "../common/posttime";
import HorizontalPosts from "./horizontalPosts";
import InterestSelection from "./interestSelection";

const Home = () => {
  // useDocumentTitle(
  //   "Bloggin | Read Write Earn | Free Yet Binge-Worthy Blogs For You to Read on The Internet"
  // );
  const theme = useTheme();
  return (
    <CustomBox>
      <Banner />
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
      <SizedBox size={2} />
      <Divider />
      <SizedBox size={2} />
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
            <HorizontalPosts />
            <HorizontalPosts />
          </CustomBox>
          {/* <SizedBox size={2} /> */}
          <InterestSelection />
        </CustomBox>
      </Container>
      <SizedBox size={2} />
    </CustomBox>
  );

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
