import styled from "styled-components";
import { Divider } from 'primereact/divider';
import SidebarDesktop from "../../widgets/SidebarDesktop";
import SidebarMobile from "../../widgets/SidebarMobile";
import AppBar from "../../widgets/AppBar";
import ContentTitle from "../shared/ContentTitle";
import ContentSubTitle from "../shared/ContentSubTitle";
import ContentTitleContainerA from "../shared/ContentTitleContainerA";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.surfaceB};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const LayoutWithSidebarAndAppBar = ({
  withSidebar = true,
  withAppBar = true,
  children,
  contentTitleText,
  contentSubTitleText,
  withTitleDivider
}) => {
  let sidebar = null;

  if (withSidebar) {
    sidebar = (
      <>
        <SidebarDesktop />
        <SidebarMobile />
      </>
    );
  }

  let titleSection = null;

  if (contentTitleText || contentSubTitleText) {
    titleSection = (
      <ContentTitleContainerA>
        <ContentTitle contentTitleText={contentTitleText} />
        <ContentSubTitle contentSubTitleText={contentSubTitleText} />
        {withTitleDivider && <Divider/>}
      </ContentTitleContainerA>
    );
  }

  return (
    <>
      {sidebar}
      <Wrapper>
        {withAppBar && <AppBar />}

        <ContentContainer>
          {titleSection}
          {children}
        </ContentContainer>
      </Wrapper>
    </>
  );
};

export default LayoutWithSidebarAndAppBar;
