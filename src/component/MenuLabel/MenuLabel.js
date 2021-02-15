import styled from "styled-components";
import { Ripple } from "primereact/ripple";
import ButtonWihtOutlineBase from "../ButtonWithOutlineBase";
import TrailingIcon from "./component/TrailingIcon/TrailingIcon";
import LeadingIcon from "./component/LeadingIcon/LeadingIcon";
import MenuText from "./component/MenuText/MenuText";

const Wrapper = styled(ButtonWihtOutlineBase)`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  padding: 8px;
  border-radius: 5px;
`;

const MenuLabel = ({ leadingIcon, menuText }) => {
  return (
    <Wrapper>
      <Ripple />

      <LeadingIcon leadingIcon="pi-wallet" />

      <MenuText menuText={menuText} />

      <TrailingIcon />
    </Wrapper>
  );
};

export default MenuLabel;
