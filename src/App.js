import React from "react";
import { useTheme } from "@mui/material/styles";

import ResponsiveAppBar from "./components/common/header";
import Home from "./components/home/index";
import AppRoutes from "./routes";
import Footer from "./components/common/footer";

function App() {
  const theme = useTheme();
  console.log(theme, "--- inside app");
  return (
    <>
      <ResponsiveAppBar />
      <AppRoutes />
      <Footer />
    </>
  );
}
export default App;
