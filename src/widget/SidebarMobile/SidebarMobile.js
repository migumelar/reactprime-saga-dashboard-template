import { useContext, useState } from "react";
import { Sidebar } from "primereact/sidebar";
import AppLogo from "../../shared/AppLogo";
import MenuList from "../../shared/MenuList";
import styled from "styled-components";
import { SidebarMobileContext } from "./SidebarMobileContext";

const StyledSidebar = styled(Sidebar)`
  z-index: 900000;
  & > .p-sidebar-content {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

const StyledAppLogo = styled(AppLogo)`
  padding: 1rem 1.5rem;
`;

const StyledMenuList = styled(MenuList)`
  display: flex;
  flex-grow: 1;
  height: 100%;
  overflow-y: auto;
  padding: 0 4px;
`;

const SidebarMobile = () => {
  const { sidebarMobileVisible, setSidebarMobileVisible } = useContext(
    SidebarMobileContext
  );

  return (
    <>
      <StyledSidebar
        visible={sidebarMobileVisible}
        onHide={() => setSidebarMobileVisible(!sidebarMobileVisible)}
        dismissable
        baseZIndex={1000000}
        showCloseIcon={true}
      >
        <StyledAppLogo src="/logo.png" />
        <StyledMenuList minimize={false} />
      </StyledSidebar>
      <button onClick={() => setSidebarMobileVisible(true)}>
        Show sidebar
      </button>
    </>
  );
};

export default SidebarMobile;
