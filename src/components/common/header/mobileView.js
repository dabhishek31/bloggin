import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

import Sidebar from "./sidebar";
import CustomBox from "../box";

import MenuIcon from "@mui/icons-material/Menu";
import brand_short_logo from "../../../assets/images/brand_short_logo.png";
import CustomImage from "../image";
import SizedBox from "../sizedbox";
import { useNavigate } from "react-router-dom";

export default function MobileView() {
  const navigate = useNavigate();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <CustomBox
      styles={{
        padding: "16px 20px ",
        display: {
          xs: "block",
          sm: "block",
          md: "none",
          lg: "none",
          xl: "none",
        },
      }}
      key={"right"}
    >
      <CustomBox
        styles={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <CustomImage
          src={brand_short_logo}
          styles={{ height: "40px", width: "auto" }}
          onClick={() => navigate("/")}
        />
        <MenuIcon onClick={toggleDrawer("right", true)} />
      </CustomBox>

      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        <Sidebar anchor={"right"} toggleDrawer={toggleDrawer} />
      </Drawer>
    </CustomBox>
  );
}
