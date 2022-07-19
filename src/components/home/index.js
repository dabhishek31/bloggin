import { Container } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import CustomTypography from "../common/typography";
import CustomBox from "../common/box";
import CustomImage from "../common/image";
import PrimaryPost from "../common/primarypost";
import SecondaryPost from "../common/secondarypost";

const Home = () => {
  return (
    <Container fixed>
      <CustomBox
        styles={{
          margin: "24px 0px",
          display: { xs: "block", sm: "flex", md: "flex" },
          justifyContent: "space-between",
        }}
      >
        <CustomBox
          styles={{
            width: { xs: "100%", sm: "66%", md: "66%", lg: "66%" },
          }}
        >
          <PrimaryPost />
        </CustomBox>

        <CustomBox
          styles={{
            width: { xs: "100%", sm: "32%", md: "32%", lg: "32%" },
          }}
        >
          <CustomBox
            needBackground
            needShadow
            needRadius
            styles={{
              p: 1,
              marginBottom: "16px",
            }}
          >
            <CustomTypography
              styles={{
                fontWeight: 500,
              }}
            >
              Most Popular
            </CustomTypography>
          </CustomBox>

          <SecondaryPost />
        </CustomBox>
      </CustomBox>
      <CustomBox
        styles={{
          border: "solid 1px black",
        }}
      >
        <CustomTypography variant="body2">
          Labore adipisicing qui cupidatat nulla esse minim sit nostrud. Id
          officia excepteur consequat id mollit laborum laborum reprehenderit
          voluptate id ipsum consequat ad dolore. Irure ea minim non ea Lorem
          reprehenderit velit proident anim nisi minim excepteur. Minim non
          Lorem aute aliqua exercitation laborum dolor occaecat ullamco ad et
          nisi. Qui pariatur et ullamco adipisicing nulla ea ea ipsum sunt
          proident veniam officia. Consectetur nulla fugiat adipisicing id
          adipisicing et dolore elit. Velit tempor esse veniam in ad esse
          aliquip excepteur commodo. Commodo nostrud irure id do nulla cupidatat
          reprehenderit enim id adipisicing anim do. Fugiat nisi excepteur et
          nostrud duis minim dolore id. Ex voluptate commodo sint minim.
        </CustomTypography>
      </CustomBox>
    </Container>
  );
};

export default Home;
