import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  console.log(theme);
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [setMode],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}





// import React, { useState } from "react";
// import "./App.css";
// import { ThemeProvider } from "styled-components";
// import { lightTheme, darkTheme } from "./styles/themes";
// import Footer from "./components/common/footer";
// import Header from "./components/common/header";
// import Home from "./components/home";
// import { GlobalStyles } from "./components/common/global-styles";

// function App() {
//   const [theme, setTheme] = useState("light");

//   const themeToggler = () => {
//     theme === "light" ? setTheme("dark") : setTheme("light");
//   };
  

//   return (
//     <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
//       <GlobalStyles />
//       <Header themeToggler={themeToggler} />
//       <Home />
//       <Footer />
//     </ThemeProvider>
//   );
// }

// export default App;
