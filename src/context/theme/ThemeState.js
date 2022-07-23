import React, { useMemo, useState } from "react";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import ColorModeContext from "./index";
import { darkTheme, lightTheme } from "../../styles/themes";
import { BackgroundContainer } from "../../components/common/common-styles";

const ColorModeState = ({ children }) => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  let theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light" ? lightTheme : darkTheme),
        },
      }),
    [mode]
  );

  theme = useMemo(() => responsiveFontSizes(theme), [theme]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <BackgroundContainer>{children}</BackgroundContainer>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ColorModeState;
