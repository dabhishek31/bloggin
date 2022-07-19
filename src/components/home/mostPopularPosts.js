import React from "react";
import CustomBox from "../common/box";
import SecondaryPost from "../common/secondarypost";
import TitleBar from "../common/titlebar";

const MostPopularPosts = () => {
  return (
    <CustomBox
      styles={{
        width: { xs: "100%", sm: "32%", md: "32%", lg: "32%" },
      }}
    >
      <TitleBar text="Most popular" />
      <SecondaryPost />
    </CustomBox>
  );
};

export default MostPopularPosts;
