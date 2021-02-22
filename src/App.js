import React, { useState } from "react";
import PrimeReact from "primereact/api";
import { Button } from "primereact/button";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "./styles/theme";
// import Sidebar from "./component/sidebar/Sidebar";
import { Tooltip } from "./shared";
import SidebarDesktop from "./widget/SidebarDesktop";
import SidebarMobile, {
  SidebarMobileContext,
  sidebarMobileState,
} from "./widget/SidebarMobile";
import AppBar from "./widget/AppBar";

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

        {/* <SidebarMobile /> */}
        <AppWrapper>
          {/*
           * global tooltip
           * if you the target element is dynamically mounted and unmounted, use tooltip hooks instead
           */}
          <Tooltip />

          {/* <SidebarMobile /> */}
          <SidebarDesktop />
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
            <div>asdasdad asda asdada asd as dasdasd asdsa</div>
          </div>
        </AppWrapper>
      </SidebarMobileContext.Provider>
    </ThemeProvider>
  );
}

export default App;
