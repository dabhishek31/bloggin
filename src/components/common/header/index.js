import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material";
import CustomBox from "../box";
import { useNavigate } from "react-router-dom";
import HeaderLeftMenu from "./headerLeftMenu";
import HeaderRightMenu from "./headerRightMenu";
import MobileView from "./mobileView";

const ResponsiveAppBar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
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
            display: { xs: "none", sm: "none", md: "flex" },
            justifyContent: "space-between",
          }}
        >
          <HeaderLeftMenu />
          <HeaderRightMenu />
        </CustomBox>

        <MobileView />
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
