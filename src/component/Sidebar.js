import { Ripple } from "primereact/ripple";
import styled from "styled-components";
import theme from "../styles/theme";
import SidebarLogo from "./SidebarLogo";
import SidebarMenu from "./SidebarMenu";

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 225px;
  height: 100%;
  background-color: ${theme.surfaceB};
  overflow-y: hidden;
`;

const HideSidebarButtonWrapper = styled.button`
  && {
    border-top: 1px solid ${theme.surfaceD};
    display: flex;
    padding: 0.5rem 1rem;
    align-items: center;
    font-family: ${theme.fontFamily};
    color: ${theme.textColor};
    cursor: pointer;

    &:hover {
      outline: 0 none;
      outline-offset: 0;
      box-shadow: 0 0 0 0.2rem #a6d5fa;
    }

    &:hover {
      background-color: ${theme.primaryColor};
      color: ${theme.primaryColorText};
    }

    & > i {
      font-size: 1.5rem;
      margin-right: 1rem;
    }
  }
`;

const HideSidebarButton = () => {
  return (
    <HideSidebarButtonWrapper className="p-reset p-ripple p-component">
      <Ripple />
      <i className="pi pi-angle-double-left" />
      <div>Hide sidebar</div>
    </HideSidebarButtonWrapper>
  );
};

function Sidebar() {
  return (
    <SidebarWrapper className="p-shadow-12">
      
      <SidebarLogo  src="/logo.png" />

      <SidebarMenu />

      <HideSidebarButton />
    </SidebarWrapper>
  );
}

export default Sidebar;
