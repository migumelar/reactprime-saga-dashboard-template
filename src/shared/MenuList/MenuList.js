import styled from "styled-components";
import Menu from "./component/Menu";
// import MenuLabel from "./component/MenuLabel";
// import SubMenuList from "./component/SubMenuList";
// import SubMenu from "./component/asdada";

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  /* padding: ${(props) => (props.minimize ? ".5rem" : "1rem 0.5rem 1rem 1rem")}; */
  padding: ${(props) => (props.minimize ? ".5rem" : "1rem")};
  flex-grow: 1;
  overflow-y: auto;
  & > :not(:last-child) {
    margin-bottom: 0.75rem;
  }
`;
// TODO: GENERATE GLOBAL TOOLTIP DINAMICALLY, OPTIONS: CUSTOM HOOKS OR CONTEXT
const MenuList = ({className, minimize}) => {
  return (
    <Wrapper className={`p-reset ${className}`}>
      
      <Menu minimize={minimize} />

      <Menu minimize={minimize} />

      <Menu minimize={minimize} />

      <Menu minimize={minimize} />


      <Menu minimize={minimize} />


      <Menu minimize={minimize} />


      <Menu minimize={minimize} />

      <Menu minimize={minimize} />

      <Menu minimize={minimize} />

      <Menu minimize={minimize} />

      <Menu minimize={minimize} />

      <Menu minimize={minimize} />


      {/* <Menu minimize={minimize} />

      <Menu minimize={minimize} />

      <Menu minimize={minimize} />

      <Menu minimize={minimize} />

      <Menu minimize={minimize} />

      <Menu minimize={minimize} />

      <Menu minimize={minimize} /> */}
 

{/* 
      <Menu minimize={minimize} />


      <Menu minimize={minimize} />


      <Menu minimize={minimize} />

      <Menu minimize={minimize} />

      <Menu minimize={minimize} />

      <Menu minimize={minimize} />

      <Menu minimize={minimize} />

      <Menu minimize={minimize} />

      <Menu minimize={minimize} />

      <Menu minimize={minimize} />

      <Menu minimize={minimize} /> */}


      {/* <Menu minimize={minimize} />

      <Menu minimize={minimize} />

      <Menu minimize={minimize} /> */}



      {/* <Menu>
        <MenuLabel leadingIcon="i" menuText="Dashboard" />

        <SubMenuList>
          <SubMenu leadingIcon="pi-wallet" subMenuText="Some report" />
          <SubMenu leadingIcon="pi-wallet" subMenuText="Some report" />
          <SubMenu leadingIcon="pi-wallet" subMenuText="Some report" />
        </SubMenuList>

      </Menu> */}
      {/* 
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
      </Menu> */}
    </Wrapper>
  );
};

export default MenuList;
