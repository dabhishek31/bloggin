import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import MainHeader from "./MainHeader";
import TopHeader from "./TopHeader";
import { Divider } from "@mui/material";

const ResponsiveAppBar = () => {
  return (
    <AppBar position="sticky">
      <Container fixed sx={{ display: { sm: "block", xs: "none" } }}>
        <TopHeader />
      </Container>
      <Divider />
      <Container fixed>
        <MainHeader />
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
