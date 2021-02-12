import styled from "styled-components";
import { Ripple } from "primereact/ripple";
import ButtonWihtOutlineBase from "./ButtonWithOutlineBase";

const SidebarMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${(props) => (props.minimize ? ".5rem" : "1rem 0.5rem 1rem 1rem")};
  flex-grow: 1;
  overflow-y: auto;
  & > :not(:last-child) {
    margin-bottom: 0.75rem;
  }
`;

const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  width: 100%;
`;

const MenuItemContent = styled(ButtonWihtOutlineBase)`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  padding: 8px;
  border-radius: 5px;
`;

const MenuItemLeadingIcon = styled.div`
  font-size: 1.25rem;
`;

const MenuItemLabel = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  width: 100%;
`;

const MenuItemTrailingIcon = styled.i`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  line-height: 1;
`;

const SubMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  margin-top: 0.25rem;
  margin-left: 2.5rem;
  margin-right: 0.5rem;

  & > * {
    margin-bottom: 0.2rem;
  }

  & > :last-child {
    margin-bottom: 0.5rem;
  }
`;

const SubMenuItem = styled(ButtonWihtOutlineBase)`
  width: 100%;
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  padding: 8px;
  border-radius: 5px;
`;

const SubMenuItemLabel = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  width: 100%;
`;

const SubMenuItemLeadingIcon = styled.div`
  font-size: 1rem;
  display: flex;
  align-items: center;
`;

const Menu = ({ minimize }) => {
  return (
    <MenuItem>
      <MenuItemContent className="p-ripple p-reset">
        <Ripple />

        <MenuItemLeadingIcon>
          <i className="pi pi-home" />
        </MenuItemLeadingIcon>
        {minimize || <MenuItemLabel>Dashboard</MenuItemLabel>}
        {minimize || <MenuItemTrailingIcon className="pi pi-chevron-down" />}
      </MenuItemContent>

      {minimize || (
        <SubMenuWrapper>
          <SubMenuItem className=" p-ripple p-reset">
            <Ripple />
            <SubMenuItemLeadingIcon className="pi pi-plus" />
            <SubMenuItemLabel>Create</SubMenuItemLabel>
          </SubMenuItem>

          <SubMenuItem className="p-ripple p-reset">
            <Ripple />
            <SubMenuItemLeadingIcon className="pi pi-plus" />
            <SubMenuItemLabel>Create</SubMenuItemLabel>
          </SubMenuItem>
        </SubMenuWrapper>
      )}
    </MenuItem>
  );
};

function SidebarMenu({ minimize }) {
  return (
    <SidebarMenuWrapper minimize={minimize}>
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
      <Menu minimize={minimize} />
      <Menu minimize={minimize} />
      <Menu minimize={minimize} /> */}
    </SidebarMenuWrapper>
  );
}

export default SidebarMenu;
