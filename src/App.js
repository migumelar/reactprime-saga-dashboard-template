import React from "react";
import PrimeReact from "primereact/api";
import { Button } from "primereact/button";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
// import "primeflex/primeflex.css";
// import "./styles/app.css";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "./styles/theme";

const GlobalStyle = createGlobalStyle`

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

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  width: 225px;
  height: 100%;
  background-color: ${theme.surfaceB};
  overflow-y: hidden;
`;

const Logo = styled.div`
  font-weight: bold;
  padding: 1rem;

  & > img {
    padding: 0.5rem;
    width: 100%;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  padding-right: 0.5rem;
  flex-grow: 1;
  overflow-y: auto;
  & > :not(:last-child) {
    margin-bottom: 0.75rem;
  }
`;

const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  /* background-color: ${theme.surfaceC}; */
`;

const MenuItemContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 8px;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background-color: ${theme.primaryColor};
    color: ${theme.primaryColorText};
  }
`;

const MenuItemLeadingIcon = styled.i`
  font-size: 1.25rem;
`;

const MenuItemLabel = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  width: 100%;
`;

const MenuItemTrailingIcon = styled.i`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  line-height: 1;
`;

const MenuItemChildren = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  margin-left: 2.5rem;
  margin-right: 0.5rem;

  & > * {
    margin-bottom: 0.2rem;
  }

  & > :last-child {
    margin-bottom: 0.5rem;
  }
`;

const SubMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  font-size: 0.95rem;
  padding: 8px;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background-color: ${theme.primaryColor};
    color: ${theme.primaryColorText};
  }
`;

const SubMenuLabel = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  width: 100%;
`;

const SubMenuLeadingIcon = styled.i`
  font-size: 0.95rem;
`;

const MenuHeader = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: 900;
  color: ${theme.textColorSecondary};
  letter-spacing: 1px;
  font-size: 0.75rem;

  && {
    margin-bottom: 1rem;
  }
`;

const HideSidebarButton = styled.button`
  && {
    border-top: 1px solid ${theme.surfaceD};
    display: flex;
    padding: 0.5rem 1rem;
    align-items: center;
    font-family:${theme.fontFamily};
    color:${theme.textColor};
    cursor: pointer;

    &:hover{
      background-color: ${theme.primaryColor};
      color:${theme.primaryColorText};
    }

    & > i {
      font-size: 1.5rem;
      margin-right: 1rem;
    }
  }
`;

function App() {
  // active ripple effect
  PrimeReact.ripple = true;

  return (
    <ThemeProvider theme={theme}>
      {/* <Normalize /> */}
      <GlobalStyle />
      <AppWrapper>
        <Sidebar>
          <Logo>
            <img src="/logo.png" />
          </Logo>

          <Menu>
            <MenuItem>
              <MenuItemContent>
                <MenuItemLeadingIcon className="pi pi-home" />
                <MenuItemLabel>Dashboard</MenuItemLabel>
                <MenuItemTrailingIcon className="pi pi-chevron-down" />
              </MenuItemContent>

              <MenuItemChildren>
                <SubMenu>
                  <SubMenuLeadingIcon className="pi pi-plus" />
                  <SubMenuLabel>Create</SubMenuLabel>
                </SubMenu>

                <SubMenu>
                  <SubMenuLeadingIcon className="pi pi-plus" />
                  <SubMenuLabel>Create</SubMenuLabel>
                </SubMenu>
              </MenuItemChildren>
            </MenuItem>

            <MenuHeader>Monthly Report</MenuHeader>

            <MenuItem>
              <MenuItemContent>
                <MenuItemLeadingIcon className="pi pi-home" />
                <MenuItemLabel>Dashboard</MenuItemLabel>
                <MenuItemTrailingIcon className="pi pi-chevron-down" />
              </MenuItemContent>
            </MenuItem>

            <MenuItem>
              <MenuItemContent>
                <MenuItemLeadingIcon className="pi pi-home" />
                <MenuItemLabel>Dashboard</MenuItemLabel>
                {/* <MenuItemTrailingIcon className="pi pi-chevron-down" /> */}
              </MenuItemContent>
            </MenuItem>

            <MenuItem>
              <MenuItemContent>
                <MenuItemLeadingIcon className="pi pi-home" />
                <MenuItemLabel>Dashboard</MenuItemLabel>
              </MenuItemContent>
            </MenuItem>

            <MenuItem>
              <MenuItemContent>
                <MenuItemLeadingIcon className="pi pi-home" />
                <MenuItemLabel>Dashboard</MenuItemLabel>
              </MenuItemContent>
            </MenuItem>

            <MenuItem>
              <MenuItemContent>
                <MenuItemLeadingIcon className="pi pi-home" />
                <MenuItemLabel>Dashboard</MenuItemLabel>
              </MenuItemContent>
            </MenuItem>

            <MenuHeader>Monthly Report</MenuHeader>

            <MenuItem>
              <MenuItemContent>
                <MenuItemLeadingIcon className="pi pi-home" />
                <MenuItemLabel>Dashboard</MenuItemLabel>
              </MenuItemContent>
            </MenuItem>

            <MenuItem>
              <MenuItemContent>
                <MenuItemLeadingIcon className="pi pi-home" />
                <MenuItemLabel>Dashboard</MenuItemLabel>
              </MenuItemContent>
            </MenuItem>

            <MenuItem>
              <MenuItemContent>
                <MenuItemLeadingIcon className="pi pi-home" />
                <MenuItemLabel>Dashboard</MenuItemLabel>
              </MenuItemContent>
            </MenuItem>

            <MenuItem>
              <MenuItemContent>
                <MenuItemLeadingIcon className="pi pi-home" />
                <MenuItemLabel>Dashboard</MenuItemLabel>
              </MenuItemContent>
            </MenuItem>
          </Menu>

          <HideSidebarButton className="p-reset">
            <i className="pi pi-angle-double-left" />
            <div>Hide sidebar</div>
          </HideSidebarButton>
        </Sidebar>
        <div>
          <Button>asdada</Button>
        </div>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
