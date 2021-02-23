import styled from "styled-components";
import SidebarDesktop from "../../widgets/SidebarDesktop";
import SidebarMobile from "../../widgets/SidebarMobile";
import AppBar from "../../widgets/AppBar";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const LayoutWithSidebarAndAppBar = ({children}) => {
  return (
    <>
      <SidebarDesktop />
      <SidebarMobile />

      <Wrapper>
          <AppBar/>

          <div>
              {children}
          </div>
      </Wrapper>
    </>
  );
};

export default LayoutWithSidebarAndAppBar;
