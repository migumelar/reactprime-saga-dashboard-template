import React from "react";
import PrimeReact from "primereact/api";
import { Button } from "primereact/button";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "./styles/theme";
// import Sidebar from "./component/sidebar/Sidebar";
import { Tooltip, AppBar } from "./shared";
import SidebarDesktop from "./widget/SidebarDesktop";
import SidebarMobile from "./widget/SidebarMobile";

const GlobalStyle = createGlobalStyle`
  *{
    font-size: 14px;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: ${theme.fontFamily};
    color: ${theme.textColor};
  }
`;

const AppWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  max-width: 1536px;
`;

function App() {
  // active ripple effect
  PrimeReact.ripple = true;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      {/*
       * global tooltip
       * if you the target element is dynamically mounted and unmounted, use tooltip hooks instead
       */}
      <Tooltip />

      {/* <SidebarMobile /> */}
      <AppWrapper>
        {/* <SidebarMobile /> */}
        {/* <SidebarDesktop /> */}
        <SidebarMobile />
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <AppBar />
          {/* <Button
            tooltip="Click to proceed"
            tooltipOptions={{ event: "focus" }}
          >
            Save
          </Button> */}
        </div>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
