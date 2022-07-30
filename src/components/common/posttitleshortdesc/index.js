import React from "react";
import CustomBox from "../box";
import CustomTypography from "../typography";

const PostTitleShortDesc = ({ shortDesc = false }) => {
  return (
    <CustomBox>
      <CustomTypography>Why your business needs a blog</CustomTypography>
      {shortDesc && (
        <CustomTypography
          styles={{
            fontWeight: 400,
          }}
        >
          Voluptate elit cillum officia consequat sint fugiat mollit dolor
          reprehenderit reprehenderit ea. Adipisicing Lorem ullamco est ex. Sint
          cillum incididunt velit magna enim laboris.....
        </CustomTypography>
      )}
    </CustomBox>
  );
};

export default PostTitleShortDesc;
