import React from "react";
import CustomBox from "../common/box";
import SecondaryPost from "../common/secondarypost";
import TitleBar from "../common/titlebar";

const MostRecentPosts = () => {
  return (
    <>
      <TitleBar text="Most recent posts" />
      <CustomBox
        styles={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", sm: "1fr 1fr 1fr" },
          gap: "20px",
        }}
      >
        <SecondaryPost />
        <SecondaryPost />
        <SecondaryPost />
      </CustomBox>
    </>
  );
};

export default MostRecentPosts;
