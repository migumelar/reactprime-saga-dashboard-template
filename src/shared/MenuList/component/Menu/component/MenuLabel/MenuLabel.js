import styled from "styled-components";
import { Ripple } from "primereact/ripple";
import ButtonWithOutlineBase from "../../../../../ButtonWithOutlineBase";
import TrailingIcon from "./component/TrailingIcon";
import LeadingIcon from "./component/LeadingIcon";
import MenuText from "./component/MenuText";

const Wrapper = styled(ButtonWithOutlineBase)`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  padding: 8px;
  border-radius: 5px;
`;

const MenuLabel = ({ onClick, leadingIcon, menuText, showSubMenu }) => {
  return (
    <Wrapper onClick={onClick}>
      <Ripple />

      <LeadingIcon leadingIcon={`pi ${leadingIcon}`} />

      <MenuText menuText={menuText} />

      <TrailingIcon
        trailingIcon={showSubMenu ? "pi-chevron-up" : "pi-chevron-down"}
      />
    </Wrapper>
  );
};

export default MenuLabel;
