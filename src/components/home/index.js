import { Container, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import HighlightPost from "./hightlight/HighlightPost";

const Home = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="lg">
      <Box sx={{ m: 2, display: "flex", justifyContent: "space-between" }}>
        <HighlightPost />
        <Box sx={{ border: "solid 1px black", width: "32%" }}></Box>
      </Box>
    </Container>
  );
};

export default Home;
