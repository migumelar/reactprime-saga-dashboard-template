import styled from "styled-components";
import theme from "../styles/theme";
import Sidebar from "./Sidebar";

const SidebarDesktopWrapper = styled.div`
  @media ${theme.breakpoint.lg} {
    display: none;
  }
`;

function SidebarDesktop() {
  return (
    <SidebarDesktopWrapper>
      <Sidebar />
    </SidebarDesktopWrapper>
  );
}

export default SidebarDesktop;
