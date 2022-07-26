import React from "react";
import CustomBox from "../common/box";
import PrimaryPost from "../common/primarypost";
import TitleBar from "../common/titlebar";

const PrimaryPostsContainer = () => {
  return (
    <CustomBox
      styles={{
        width: { xs: "100%", sm: "66%", md: "66%", lg: "66%" },
      }}
    >
      <TitleBar text="Post of the week" />
      <PrimaryPost />
    </CustomBox>
  );
};

export default PrimaryPostsContainer;
