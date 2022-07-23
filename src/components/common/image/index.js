import React from "react";
import { CustomImageContainer } from "./styles";

const CustomImage = ({
  src = "",
  alt = "",
  styles = {},
  customStyles = {},
}) => {
  return (
    <CustomImageContainer
      src={src}
      alt={alt}
      loading="lazy"
      customStyles={customStyles}
      style={{ ...styles }}
    />
  );
};

export default CustomImage;
