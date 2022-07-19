import React from "react";
import { useTheme } from "@mui/material/styles";
import { PrimaryPostContainer } from "./style";
import CustomBox from "../box";
import CustomImage from "../image";
import CustomTypography from "../typography";

const PrimaryPost = () => {
  const theme = useTheme();

  return (
    <PrimaryPostContainer>
      <CustomBox
        needShadow
        needRadius
        styles={{
          backgroundColor: "white",
          p: 0,
        }}
      >
        <CustomImage
          src={`https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
        />

        <CustomBox
          needShadow
          styles={{
            position: "absolute",
            bottom: "1px",
            left: "0",
            background: "#0000006e",
            width: "100%",
          }}
        >
          <CustomTypography
            flexWrap={true}
            styles={{
              padding: "8px 20px",
              color: "white",
              fontWeight: 700,
              width: "76%",
              fontSize: {
                xs: theme.typography.body1.fontSize,
                sm: theme.typography.h6.fontSize,
                md: theme.typography.h5.fontSize,
                lg: theme.typography.h4.fontSize,
              },
            }}
          >
            How to build your infrastructure using code ?
          </CustomTypography>
        </CustomBox>
      </CustomBox>
    </PrimaryPostContainer>
  );
};

export default PrimaryPost;
