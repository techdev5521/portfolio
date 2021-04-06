import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import webqueueTheme from "./theme";
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = webqueueTheme(darkMode);

  return (
    <ThemeProvider theme={theme}>
      
    </ThemeProvider>
  );
}

export default App;
