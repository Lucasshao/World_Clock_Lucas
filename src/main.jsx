import React from "react";
import ReactDOM from "react-dom/client";
import { ClickToComponent } from "click-to-react-component";
import App from "./App";

import { createGlobalStyle, ThemeProvider } from "styled-components";

const theme = {
  primary: "#69c0ff",
  secondary: "#b7eb8f",
  color: {
    dark: "#333",
    light: "#eee",
  },
};

const backgroundLinearGradient = `linear-gradient(to bottom right, ${theme.primary} 0%, ${theme.secondary} 100%)`;

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
    height: 100%;
    background: ${backgroundLinearGradient};

    font-family: 'Orbitron', sans-serif;
    font-size: 1.2rem;
  }

  *,
   *::before,
   *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    -webkit-user-drag: none;
    user-select: none;
  }
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    <ClickToComponent />
  </React.StrictMode>
);
