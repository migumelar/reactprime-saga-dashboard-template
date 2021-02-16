import styled from "styled-components";
import theme from "../../styles/theme";
import MenuList from "../../shared/MenuList";
import AppLogo from "../../shared/AppLogo";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: ${(props) => (props.minimize ? "60px" : "225px")};
  /* width: 225px; */
  height: 100%;
  background-color: ${theme.surfaceA};
  overflow-y: hidden;
`;

const StyledAppLogo = styled(AppLogo)`
  padding: 1.5rem;
`;

const SidebarDesktop = () => {
  return (
    <Wrapper className="p-shadow-12">
      <StyledAppLogo src="/logo.png" />

      <MenuList />
    </Wrapper>
  );
};

export default SidebarDesktop;
