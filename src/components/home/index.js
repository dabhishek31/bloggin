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
        <Box
          sx={{
            width: "2%",
            background: theme.palette.primary.main,
          }}
        ></Box>
        <Box sx={{ border: "solid 1px black", width: "30%" }}></Box>
      </Box>
    </Container>
  );
};

export default Home;
