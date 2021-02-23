import React, { useState } from "react";
import PrimeReact from "primereact/api";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "./styles/theme";
import { Tooltip } from "./shared";
import { SidebarMobileContext } from "./widgets/SidebarMobile";
import TestPage from "./features/TestPage";

const GlobalStyle = createGlobalStyle`
  *{
    font-size: 14px;
  }

  body {
    position: relative;
    padding: 0;
    margin: 0;
    font-family: ${theme.fontFamily};
    color: ${theme.textColor};
    overflow-y: hidden;
  }
`;

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  max-width: 1536px;
`;

function App() {
  // active ripple effect
  PrimeReact.ripple = true;

  // sidebar mobile state
  const [sidebarMobileVisible, setSidebarMobileVisible] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <SidebarMobileContext.Provider
        value={{ sidebarMobileVisible, setSidebarMobileVisible }}
      >
        <GlobalStyle />

        <AppWrapper>
          {/*
           * global tooltip
           * if you the target element is dynamically mounted and unmounted, use tooltip hooks instead
           */}
          <Tooltip />

          <TestPage />

        </AppWrapper>
      </SidebarMobileContext.Provider>
    </ThemeProvider>
  );
}

export default App;
