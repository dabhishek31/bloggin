import React from "react";
import { useTheme } from "@mui/material/styles";
import { PrimaryPostContainer } from "./style";
import CustomBox from "../box";
import CustomImage from "../image";
import CustomTypography from "../typography";
import SizedBox from "../sizedbox";
import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

const PrimaryPost = ({ src = "cloud,cloud+infrastructure" }) => {
  const theme = useTheme();
  let navigate = useNavigate();

  return (
    <PrimaryPostContainer onClick={() => navigate("/blog/123")}>
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
          needRadius
          needBackground
          styles={{
            position: "absolute",
            top: "0",
            left: "0",
            background: "#FFE1BB",
          }}
        >
          <StarIcon
            sx={{
              color: "black",
              p: 1,
            }}
          />
        </CustomBox>
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
              color: "white",
              fontWeight: 700,
              padding: "8px 20px",
              width: "76%",
              fontSize: {
                xs: theme.typography.body1.fontSize,
                sm: theme.typography.h6.fontSize,
                md: theme.typography.h5.fontSize,
                lg: theme.typography.h4.fontSize,
              },
            }}
          >
            Build your cloud infrastructure from code - Terraform (for
            beginners)
          </CustomTypography>
          <CustomTypography
            styles={{
              fontWeight: 500,
              padding: "0 20px",
              color: "white",
            }}
          >
            Marketing | 25 min Read
          </CustomTypography>
          <SizedBox size={0.5} />
        </CustomBox>
      </CustomBox>
    </PrimaryPostContainer>
  );
};

export default PrimaryPost;
