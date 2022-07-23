import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import MainHeader from "./MainHeader";
import TopHeader from "./TopHeader";
import { Box, Divider, useTheme } from "@mui/material";
import CustomBox from "../box";
import CustomImage from "../image";
import LightLogo from "../../../assets/bloggin_logo_light.png";
import DarkLogo from "../../../assets/bloggin_logo_dark.png";
import { useNavigate } from "react-router-dom";

const ResponsiveAppBar = () => {
  const theme = useTheme();
  let navigate = useNavigate();

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
              src={theme.palette.mode === "dark" ? DarkLogo : LightLogo}
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
