import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import MainHeader from "./MainHeader";
import TopHeader from "./TopHeader";
import { Box, Divider, useTheme } from "@mui/material";
import CustomBox from "../box";
import CustomImage from "../image";
import { useNavigate } from "react-router-dom";
import SizedBox from "../sizedbox";
import BrandLogo from "../../../assets/images/brand_logo.png";
import CustomTypography from "../typography";

const leftMenuItems = [
  {
    text: "Our Story",
    click: () => {},
  },
  {
    text: "Membership",
    click: () => {},
  },
  {
    text: "Write",
    click: () => {},
  },
];

const rightMenuItems = [
  {
    text: "Buy me a coffee",
    click: () => {
      window.open(
        "https://buy.stripe.com/00gcPE9zG5rm58c4gg",
        "_blank" // <- This is what makes it open in a new window.
      );
    },
  },
  {
    text: "Sign In",
    click: () => {},
  },
];

const ResponsiveAppBar = () => {
  const theme = useTheme();
  let navigate = useNavigate();
  return (
    <AppBar
      sx={{
        background: theme.palette.common.white,
      }}
      position="sticky"
    >
      <Container
        fixed
        sx={{
          // outline: "solid 1px red",
          pl: "0 !important",
          pr: "0  !important",
        }}
      >
        <CustomBox
          styles={{
            pt: 2,
            pb: 2,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <CustomBox
            styles={{
              display: "flex",
              // outline: "solid 1px red",
              alignItems: "center",
            }}
          >
            <CustomImage
              src={BrandLogo}
              customStyles={{ width: "122px", cursor: "pointer" }}
            />

            {leftMenuItems.map((item) => (
              <CustomTypography
                styles={{
                  fontWeight: 500,
                  ml: "40px",
                  cursor: "pointer",
                }}
              >
                {item.text}
              </CustomTypography>
            ))}
          </CustomBox>

          <CustomBox
            styles={{
              display: "flex",
              // outline: "solid 1px red",
              alignItems: "center",
            }}
          >
            {rightMenuItems.map((item) => (
              <CustomTypography
                onClick={item.click}
                styles={{
                  fontWeight: 500,
                  ml: "40px",
                  cursor: "pointer",
                }}
              >
                {item.text}
              </CustomTypography>
            ))}
            <SizedBox size={2} />
            <CustomBox
              needRadius
              styles={{
                background: theme.palette.primary.tertiary,
                padding: "12px 20px",
                cursor: "pointer",
              }}
            >
              <CustomTypography
                styles={{
                  fontWeight: 500,
                }}
              >
                Sign Up
              </CustomTypography>
            </CustomBox>
          </CustomBox>
        </CustomBox>
      </Container>
    </AppBar>
  );
  return (
    <AppBar
      sx={{
        background:
          theme.palette.mode === "dark"
            ? theme.palette.customBackground
            : theme.palette.common.white,
      }}
      position="sticky"
    >
      <CustomBox
        styles={{
          position: "relative",
          width: "100%",
        }}
      >
        <CustomBox
          styles={{
            position: "absolute",
            width: "100%",
            height: { xs: "100%", sm: "100%", md: "58%" },
            zIndex: -1,
            bottom: 0,
            background: theme.palette.customBackground,
          }}
        ></CustomBox>
        <Container fixed>
          <CustomBox
            styles={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <CustomImage
              // src={theme.palette.mode === "dark" ? DarkLogo : LightLogo}
              styles={{
                display: { xs: "none", sm: "flex", md: "flex" },
                alignSelf: "center",
                padding: 12,
              }}
              onClick={() => navigate("/")}
              customStyles={{
                [theme.breakpoints.up("xs")]: {
                  width: "100px",
                },
                [theme.breakpoints.up("sm")]: {
                  width: "120px",
                },
                [theme.breakpoints.up("md")]: {
                  width: "200px",
                },
              }}
            />
            <CustomBox>
              <CustomBox
                styles={{ display: { md: "block", sm: "none", xs: "none" } }}
              >
                <TopHeader />
              </CustomBox>
              <Divider />
              <MainHeader />
            </CustomBox>
          </CustomBox>
        </Container>
      </CustomBox>
    </AppBar>
  );
  return (
    <AppBar
      sx={{
        background:
          theme.palette.mode === "dark"
            ? theme.palette.customBackground
            : theme.palette.common.white,
      }}
      position="sticky"
    >
      <Container
        fixed
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <CustomBox
          // onClick={() => navigate("/")}
          styles={{
            display: "flex",
          }}
        >
          <CustomImage
            src={"Logo"}
            styles={{
              display: { xs: "none", sm: "flex", md: "flex" },
              mr: 1,
              alignSelf: "center",
              width: "80px",
            }}
          />
        </CustomBox>
        <CustomBox>
          <CustomBox styles={{ display: { sm: "block", xs: "none" } }}>
            <TopHeader />
          </CustomBox>
          <Divider />
          <Box
            sx={{
              background: theme.palette.customBackground,
            }}
          >
            <MainHeader />
          </Box>
        </CustomBox>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
