import { styled } from "@mui/material/styles";

export const CustomImageContainer = styled("img")((props) => {
  return {
    ...props.customStyles,
  };
});
