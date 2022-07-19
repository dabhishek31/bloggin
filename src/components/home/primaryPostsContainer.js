import React from "react";
import CustomBox from "../common/box";
import PrimaryPost from "../common/primarypost";

const PrimaryPostsContainer = () => {
  return (
    <CustomBox
      styles={{
        width: { xs: "100%", sm: "66%", md: "66%", lg: "66%" },
      }}
    >
      <PrimaryPost />
    </CustomBox>
  );
};

export default PrimaryPostsContainer;
