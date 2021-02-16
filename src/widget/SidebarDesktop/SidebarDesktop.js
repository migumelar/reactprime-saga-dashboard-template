import styled from "styled-components";
import theme from "../../styles/theme";
import MenuList from "../../component/MenuList";

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

const SidebarDesktop = () => {
  return (
    <Wrapper className="p-shadow-12">
      <MenuList />
    </Wrapper>
  );
};

export default SidebarDesktop;
