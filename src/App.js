import React from "react";
import PrimeReact from "primereact/api";
import { Button } from "primereact/button";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "./styles/theme";
import Sidebar from "./component/Sidebar";

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
      {/* <Normalize /> */}
      <GlobalStyle />
      <AppWrapper>
        <Sidebar />

        <div>
          <Button tooltip="Click to proceed" >Save</Button>
        </div>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
