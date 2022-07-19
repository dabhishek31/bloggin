import React from "react";
import CustomBox from "../box";
import CustomImage from "../image";
import SizedBox from "../sizedbox";
import CustomTypography from "../typography";

const SecondaryPost = ({ image, title }) => {
  return (
    <CustomBox needShadow needRadius>
      <CustomImage
        src={`https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
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
