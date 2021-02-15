import Menu from "../Menu";
import MenuLabel from "../MenuLabel/MenuLabel";
import SubMenuList from "../SubMenuList";
import SubMenu from "../SubMenu";

const MenuList = () => {
  return (
    <ul className="p-reset">
      <Menu>

        <MenuLabel leadingIcon="i" menuText="Dashboard" />

        <SubMenuList>
          <SubMenu leadingIcon="o" subMenuText="Some submenu text" />
        </SubMenuList>

      </Menu>
    </ul>
  );
};

export default MenuList;
