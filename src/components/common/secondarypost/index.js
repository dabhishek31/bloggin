import React from "react";
import CustomBox from "../box";
import CustomImage from "../image";
import SizedBox from "../sizedbox";
import CustomTypography from "../typography";

const SecondaryPost = ({
  image,
  title,
  src = "city,night",
  show = true,
  customStyles = {},
}) => {
  return (
    <CustomBox
      needShadow
      needRadius
      styles={{
        width: { xs: "100%", sm: "100%" },
      }}
    >
      <CustomImage
        src={`https://source.unsplash.com/random/250x250`}
        customStyles={customStyles}
      />

      <CustomBox
        needBackground
        styles={{
          p: 1,
        }}
      >
        <CustomTypography variant="body2">
          Cillum occaecat magna ullamco proident eu nulla eu aliqua commodo.
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
