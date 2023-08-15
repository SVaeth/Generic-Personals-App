// to be removed when mui has better support for next.js13
"use client"

import React from "react";
import { CssBaseline, styled, ThemeProvider } from "@mui/material";
import AppRoutes from "./routing/AppRoutes";
import { stores } from "./stores/stores";
import NavBar from "./components/NavBar";

const Root = styled("div")(({ theme }) => ({
  margin: theme.spacing(2),
}));

const App = () => {
  const { uiStore } = stores;

  return (
    <ThemeProvider theme={uiStore.getTheme()}>
      <CssBaseline />
      <Root className="App">
        <AppRoutes />
        <NavBar />
      </Root>
    </ThemeProvider>
  );
}

export default App;