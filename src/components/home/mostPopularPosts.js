import { useTheme } from "@mui/material";
import React from "react";
import CustomBox from "../common/box";
import SecondaryPost from "../common/secondarypost";
import TitleBar from "../common/titlebar";

const MostPopularPosts = () => {
  return (
    <CustomBox
      styles={{
        width: { xs: "100%", sm: "32%", md: "32%", lg: "32%" },
        marginTop: { xs: "26px", sm: 0 },
      }}
    >
      <TitleBar text="Most popular" />
      <SecondaryPost
      // customStyles={{
      //   [theme.breakpoints.down("sm")]: {
      //     display: "none",
      //   },
      // }}
      />
    </CustomBox>
  );
};

export default MostPopularPosts;
