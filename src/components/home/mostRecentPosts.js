import { useTheme } from "@mui/material";
import React from "react";
import CustomBox from "../common/box";
import SecondaryPost from "../common/secondarypost";
import TitleBar from "../common/titlebar";

const MostRecentPosts = () => {
  const theme = useTheme();
  return (
    <>
      <TitleBar text="Most recent posts" />
      <CustomBox
        styles={{
          display: { sm: "grid" },
          gridTemplateColumns: { xs: "1fr 1fr", sm: "1fr 1fr 1fr" },
          gap: "20px",
        }}
      >
        <SecondaryPost
          customBoxStyles={{
            [theme.breakpoints.up("xs")]: {
              marginBottom: "8px",
            },
          }}
        />
        <SecondaryPost
          customBoxStyles={{
            [theme.breakpoints.up("xs")]: {
              marginBottom: "8px",
            },
          }}
        />
        <SecondaryPost
          customBoxStyles={{
            [theme.breakpoints.up("xs")]: {
              marginBottom: "8px",
            },
          }}
        />
      </CustomBox>
    </>
  );
};

export default MostRecentPosts;
