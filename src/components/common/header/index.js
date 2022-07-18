import React from "react";
import { Line } from "../common-styles";
import MainHeader from "./main-header";
import TopHeader from "./top-header";
import { CustomAppBar } from "./header-styles";

const Header = ({ themeToggler }) => {
  return (
    <>
      <CustomAppBar position="sticky">
        <div class="main-container">
          <TopHeader themeToggler={themeToggler} />
        </div>
        <Line />
        <div class="main-container">
          <MainHeader />
        </div>
      </CustomAppBar>

      <Line />
    </>
  );
};

export default Header;
