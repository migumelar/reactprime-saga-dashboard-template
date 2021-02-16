import styled from "styled-components";
import Menu from "../Menu";
import MenuLabel from "../MenuLabel";
import SubMenuList from "../SubMenuList/SubMenuList";
import SubMenu from "../SubMenu";


const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  padding: ${(props) => (props.minimize ? ".5rem" : "1rem 0.5rem 1rem 1rem")};
  flex-grow: 1;
  overflow-y: auto;
  & > :not(:last-child) {
    margin-bottom: 0.75rem;
  }
`;


const MenuList = () => {
  return (
    <Wrapper className="p-reset">
      <Menu>
        <MenuLabel leadingIcon="i" menuText="Dashboard" />

        <SubMenuList>
          <SubMenu leadingIcon="pi-wallet" subMenuText="Some report" />
          <SubMenu leadingIcon="pi-wallet" subMenuText="Some report" />
          <SubMenu leadingIcon="pi-wallet" subMenuText="Some report" />
        </SubMenuList>

      </Menu>

      <Menu>
        <MenuLabel leadingIcon="i" menuText="Dashboard" />

        <SubMenuList>
          <SubMenu leadingIcon="pi-wallet" subMenuText="Some report" />
          <SubMenu leadingIcon="pi-wallet" subMenuText="Some report" />
          <SubMenu leadingIcon="pi-wallet" subMenuText="Some report" />
        </SubMenuList>

      </Menu>

      <Menu>
        <MenuLabel leadingIcon="i" menuText="Dashboard" />
      </Menu>

      <Menu>
        <MenuLabel leadingIcon="i" menuText="Dashboard" />
      </Menu>

      <Menu>
        <MenuLabel leadingIcon="i" menuText="Dashboard" />
      </Menu>
      
    </Wrapper>
  );
};

export default MenuList;
