import React from "react";
import CustomBox from "../common/box";
import SizedBox from "../common/sizedbox";
import MostRecentPosts from "./mostRecentPosts";
import MostPopularPosts from "./mostPopularPosts";
import PrimaryPostsContainer from "./primaryPostsContainer";

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
