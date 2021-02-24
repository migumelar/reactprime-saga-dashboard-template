import styled from "styled-components";
import SidebarDesktop from "../../widgets/SidebarDesktop";
import SidebarMobile from "../../widgets/SidebarMobile";
import AppBar from "../../widgets/AppBar";
import ContentContainer from '../shared/ContentContainer';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.surfaceB};
`;


const LayoutWithSidebarAndAppBar = ({children}) => {
  return (
    <>
      <SidebarDesktop />
      <SidebarMobile />

      <Wrapper>
          <AppBar/>

          <ContentContainer>
              {children}
          </ContentContainer>
      </Wrapper>
    </>
  );
};

export default LayoutWithSidebarAndAppBar;
