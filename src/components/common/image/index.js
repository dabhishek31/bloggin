import React from "react";
import { CustomImageContainer } from "./styles";

const CustomImage = ({
  src = "",
  alt = "",
  styles = {},
  customStyles = {},
  onClick = null,
}) => {
  return (
    <CustomImageContainer
      onClick={onClick}
      src={src}
      alt={alt}
      loading="lazy"
      customStyles={customStyles}
      style={{ ...styles }}
    />
  );
};

export default CustomImage;
