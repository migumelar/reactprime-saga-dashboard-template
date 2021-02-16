import styled from "styled-components";
import MenuLabel from './component/MenuLabel';
import SubMenuList from './component/SubMenuList';

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  width: 100%;
`;

const Menu = ({ className, children }) => {
  return (
    <Wrapper className={className}>

      <MenuLabel leadingIcon="i" menuText="Dashboard" />

      <SubMenuList/>

    </Wrapper>
  );
};

export default Menu;
