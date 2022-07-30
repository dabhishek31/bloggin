import React from "react";
import CustomBox from "../box";
import SizedBox from "../sizedbox";
import CustomImage from "../image";
import avatar1 from "../../../assets/demo/Avatar-1.png";
import CustomTypography from "../typography";

const UserView = () => {
  return (
    <CustomBox styles={{ display: "flex", alignItems: "center" }}>
      <CustomImage src={avatar1} styles={{ height: "30px", width: "30px" }} />
      <SizedBox size={0.5} />
      <CustomTypography styles={{ fontSize: "14px" }}>
        Patricia Sanders
      </CustomTypography>
    </CustomBox>
  );
};

export default UserView;
