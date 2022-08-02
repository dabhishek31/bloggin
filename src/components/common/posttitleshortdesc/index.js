import React from "react";
import CustomBox from "../box";
import CustomTypography from "../typography";

const PostTitleShortDesc = ({ shortDesc = false }) => {
  return (
    <CustomBox>
      <CustomTypography
        styles={{
          fontSize: "14px",
        }}
      >
        Why your business needs a blog
      </CustomTypography>
      {shortDesc && (
        <CustomTypography
          styles={{
            fontWeight: 400,
            fontSize: "14px",
          }}
        >
          Voluptate elit cillum officia consequat sint fugiat mollit dolor
          reprehenderit reprehenderit ea...
        </CustomTypography>
      )}
    </CustomBox>
  );
};

export default PostTitleShortDesc;
