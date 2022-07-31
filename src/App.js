import React from "react";
import { useTheme } from "@mui/material/styles";

import ResponsiveAppBar from "./components/common/header";
import AppRoutes from "./routes";

function App() {
  const theme = useTheme();
  console.log(theme, "--- inside app");
  return (
    <>
      <ResponsiveAppBar />
      <AppRoutes />
    </>
  );
}
export default App;
