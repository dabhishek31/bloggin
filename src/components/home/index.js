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
      <Banner
        heading="Hakuna Matata"
        shortDesc="Occaecat magna reprehenderit mollit elit do sunt veniam. In non
            nostrud non amet magna adipisicing sunt ipsum. Officia qui irure
            officia Lorem mollit minim enim cillum amet elit eiusmod magna amet
            aliquip."
      />
      <TrendingPosts />
      <SizedBox size={2} />
      <Divider />
      <SizedBox size={2} />
      <VerticalPosts />
      {/* <SizedBox size={2} /> */}
    </CustomBox>
  );
};

export default Home;
