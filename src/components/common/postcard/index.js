import React from "react";
import { useTheme } from "@mui/material";
import CustomBox from "../box";
import SizedBox from "../sizedbox";
import CustomImage from "../image";
import avatar1 from "../../../assets/demo/Avatar-1.png";
import CustomTypography from "../typography";
import UserView from "../userview";
import PostTitleShortDesc from "../posttitleshortdesc";
import PostDateTime from "../posttime";

const PostCard = () => {
  const theme = useTheme();
  return (
    <CustomBox styles={{ display: "flex" }}>
      <CustomTypography
        styles={{
          fontSize: "24px",
          color: theme.palette.text.disabled,
          mt: 1,
        }}
      >
        01
      </CustomTypography>
      <CustomBox styles={{ ml: 2 }}>
        <UserView />
        <SizedBox size={0.5} />
        <PostTitleShortDesc />
        <SizedBox size={0.2} />
        <PostDateTime />
      </CustomBox>
    </CustomBox>
  );
};

export default PostCard;
