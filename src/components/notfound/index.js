import { CircularProgress, Container } from "@mui/material";
import React from "react";
import SizedBox from "../common/sizedbox";
import useDocumentTitle from "../../hooks/useTitle";
import CustomBox from "../common/box";
import CustomTypography from "../common/typography";

const NotFound = () => {
  useDocumentTitle("404 Page not found");
  return (
    <Container fixed>
      <CustomBox
        styles={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "70vh",
          alignItems: "center",
        }}
      >
        <CustomTypography
          styles={{
            fontSize: "20px",
          }}
        >
          404 Page Not Found
        </CustomTypography>
      </CustomBox>
    </Container>
  );
};

export default NotFound;
