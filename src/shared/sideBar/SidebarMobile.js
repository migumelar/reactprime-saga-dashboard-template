import styled from "styled-components";
import theme from "../../styles/theme";
// import Sidebar from "./SidebarContent";
import { Sidebar } from "primereact/sidebar";
import { useState } from "react";
import SidebarLogo from "./SidebarLogo";
import SidebarMenu from "./SidebarMenu";
// const SidebarMobileWrapper = styled.div`
//   display: block;
//   @media ${theme.breakpoint.lg} {
//     display: none;
//   }
// `;


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function SidebarMobile() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        dismissable
        baseZIndex={1000000000000000}
        showCloseIcon={true}
      >
        <Wrapper>
          <SidebarLogo src="/logo.png" />

          <SidebarMenu />
        </Wrapper>
      </Sidebar>
      <button onClick={() => setVisible(true)}>Show sidebar</button>
    </>
  );
}



export default SidebarMobile;
