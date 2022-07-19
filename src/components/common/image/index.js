import React from "react";

const CustomImage = ({ src = "", alt = "", styles = {} }) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      style={{ display: "block", ...styles }}
    />
  );
};

export default CustomImage;
