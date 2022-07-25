import React from "react";
import CustomBox from "../box";
import CustomImage from "../image";
import SizedBox from "../sizedbox";
import CustomTypography from "../typography";
import { useNavigate } from "react-router-dom";

const SecondaryPost = ({
  image,
  title,
  src = "city,night",
  show = true,
  customStyles = {},
  customBoxStyles = {},
}) => {
  let navigate = useNavigate();

  return (
    <CustomBox
      needShadow
      needBackground
      needRadius
      onClick={() => navigate("/blog/123")}
      styles={{
        ...customBoxStyles,
        width: { sm: "100%" },
        display: { xs: "flex", sm: "block", md: "block" },
        p: 1,
      }}
    >
      <CustomBox
        styles={{
          display: { xs: "flex" },
          flex: { xs: "1" },
        }}
      >
        <CustomImage
          src={`https://source.unsplash.com/random/250x250`}
          customStyles={customStyles}
        />
      </CustomBox>
      <SizedBox />
      <CustomBox
        styles={{
          flex: { xs: "3" },
        }}
      >
        <CustomTypography variant="body2">
          ACillum occaecat magna ullamco proident eu nulla eu aliqua commodo.
        </CustomTypography>
        <SizedBox size={0.5} />
        <CustomTypography
          styles={{
            fontWeight: 500,
          }}
        >
          Marketing | 25 min Read
        </CustomTypography>
      </CustomBox>
    </CustomBox>
  );
};

export default SecondaryPost;
