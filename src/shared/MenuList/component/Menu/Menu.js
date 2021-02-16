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

const Menu = ({ className }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const onClickHandle = () => setShowSubMenu(!showSubMenu);

  return (
    <Wrapper className={className}>
      <MenuLabel
        onClick={onClickHandle}
        leadingIcon="pi-wallet"
        menuText="Dashboard"
      />

      {showSubMenu && <SubMenuList />}
    </Wrapper>
  );
};

export default Menu;
