import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import MainHeader from "./MainHeader";
import TopHeader from "./TopHeader";
import { Box, Divider, useTheme } from "@mui/material";

const ResponsiveAppBar = () => {
  const theme = useTheme();
  return (
    <AppBar
      sx={{
        background:
          theme.palette.mode === "dark"
            ? theme.palette.customBackground
            : "transparent",
      }}
      position="sticky"
    >
      <Container fixed sx={{ display: { sm: "block", xs: "none" } }}>
        <TopHeader />
      </Container>
      <Divider />
      <Box
        sx={{
          background: theme.palette.customBackground,
        }}
      >
        <Container fixed>
          <MainHeader />
        </Container>
      </Box>
    </AppBar>
  );
};
export default ResponsiveAppBar;
