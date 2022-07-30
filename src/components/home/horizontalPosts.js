import React from "react";
import CustomBox from "../common/box";
import CustomImage from "../common/image";
import PostDateTime from "../common/posttime";
import PostTitleShortDesc from "../common/posttitleshortdesc";
import SizedBox from "../common/sizedbox";
import UserView from "../common/userview";

const HorizontalPosts = () => {
  return (
    <CustomBox
      styles={{
        display: "flex",
        justifyContent: "space-around",
        mb: 6,
      }}
    >
      <CustomBox>
        <UserView />
        <SizedBox size={0.5} />
        <PostTitleShortDesc shortDesc />
        <SizedBox size={0.2} />
        <PostDateTime />
      </CustomBox>
      <SizedBox size={2} />
      <CustomBox styles={{ display: "flex", alignItems: "center" }}>
        <CustomImage
          styles={{ height: "150px", width: "auto" }}
          src="https://images.pexels.com/photos/12906892/pexels-photo-12906892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      </CustomBox>
    </CustomBox>
  );
};

export default HorizontalPosts;
