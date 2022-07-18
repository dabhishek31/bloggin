import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";

import ColorModeContext from "./context/theme/index";
import ResponsiveAppBar from "./components/common/header";
import Home from "./components/home/index";

function App() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  console.log(theme, "--- inside app");

  return (
    <>
      <ResponsiveAppBar />
      <Home />
    </>
  );
}
export default App;

/*     
        bgcolor: 'background.default',
        color: 'text.primary',
        {theme.palette.mode} mode
        onClick={colorMode.toggleColorMode}
      */
