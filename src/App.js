import React from "react";
import { useTheme } from "@mui/material/styles";

import ResponsiveAppBar from "./components/common/header";
import Home from "./components/home/index";

function App() {
  const theme = useTheme();
  console.log(theme, "--- inside app");

  return (
    <>
      <ResponsiveAppBar />
      <Home />
    </>
  );
}
export default App;
