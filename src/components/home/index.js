import React from "react";
import { Divider } from "@mui/material";

import CustomBox from "../common/box";
import SizedBox from "../common/sizedbox";
import Banner from "./banner";

import TrendingPosts from "./trendingPosts";
import VerticalPosts from "./verticalPosts";

const Home = () => {
  return (
    <CustomBox>
      <Banner />
      <TrendingPosts />
      <SizedBox size={2} />
      <Divider />
      <SizedBox size={2} />
      <VerticalPosts />
      <SizedBox size={2} />
    </CustomBox>
  );
};

export default Home;
