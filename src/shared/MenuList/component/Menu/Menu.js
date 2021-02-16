import { useState } from "react";
import styled from "styled-components";
import MenuLabel from "./component/MenuLabel";
import SubMenuList from "./component/SubMenuList";

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  width: 100%;
`;

const Menu = ({ className, minimize }) => {
  const [showSubMenu, setShowSubMenu] = useState(true);

  const onClickHandle = () => setShowSubMenu(!showSubMenu);

  return (
    <Wrapper className={className}>
      <MenuLabel
        minimize={minimize}
        showSubMenu={showSubMenu}
        onClick={onClickHandle}
        leadingIcon="pi-wallet"
        menuText="Dashboard"
      />

      {showSubMenu && <SubMenuList minimize={minimize} />}
    </Wrapper>
  );
};

export default Menu;
