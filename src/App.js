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
import { Tooltip, SidebarDesktop, AppBar, SidebarMobile } from "./component";

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
        I do this because global tooltip options seems like doens't work 
        github issue: https://github.com/primefaces/primereact/issues/1811
      */}

      {/* hover tooltip */}
      <Tooltip target=".rightTooltipHover" position="right" event="hover" />
      <Tooltip target=".leftTooltipHover" position="left" event="hover" />
      <Tooltip target=".topTooltipHover" position="top" event="hover" />
      <Tooltip target=".bottomTooltipHover" position="bottom" event="hover" />

      {/* focus tooltip */}
      <Tooltip target=".rightTooltipHover" position="right" event="focus" />
      <Tooltip target=".leftTooltipHover" position="left" event="focus" />
      <Tooltip target=".topTooltipHover" position="top" event="focus" />
      <Tooltip target=".bottomTooltipHover" position="bottom" event="focus" />
      {/* <SidebarMobile /> */}
      <AppWrapper>

        <SidebarMobile />
        <SidebarDesktop />
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <AppBar />
          <Button
            tooltip="Click to proceed"
            tooltipOptions={{ event: "focus" }}
          >
            Save
          </Button>
        </div>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
