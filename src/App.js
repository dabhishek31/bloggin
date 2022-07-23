import React from "react";
import { useTheme } from "@mui/material/styles";

import ResponsiveAppBar from "./components/common/header";
import AppRoutes from "./routes";
import Footer from "./components/common/footer";
import CircularLoader from "./components/common/loader";

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
