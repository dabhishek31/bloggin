import React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, Box } from "@mui/material";
import { HighlightPostContainer } from "../HomeStyles";

const HighlightPost = () => {
  const theme = useTheme();
  return (
    <HighlightPostContainer>
      <img
        src={`https://g.foolcdn.com/editorial/images/559452/gettyimages-1157887211.jpg`}
        srcSet={`https://andrewbeaton.net/wp-content/uploads/2019/10/HashiCorp-Terraform-logo.png`}
        alt={"item.title"}
        loading="lazy"
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "0",
          left: "0",
          background: "#0000006e",
          width: "100%",
        }}
      >
        <Typography
          variant="h4"
          flexWrap={true}
          sx={{
            padding: "8px 20px",
            color: "white",
            fontWeight: 700,
            width: "76%",
          }}
        >
          How to build your infrastructure using code ?
        </Typography>
      </Box>
    </HighlightPostContainer>
  );
};

export default HighlightPost;
