import styled from "styled-components";
import theme from "../../styles/theme";
import Sidebar from "./SidebarContent";

const SidebarDesktopWrapper = styled.div`
  display: none;
  @media ${theme.breakpoint.lg} {
    display: block;
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
