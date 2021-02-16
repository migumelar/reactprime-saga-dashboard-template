import styled from "styled-components";
import { Ripple } from "primereact/ripple";
import ButtonWihtOutlineBase from "../ButtonWithOutlineBase";
import TrailingIcon from "./component/TrailingIcon";
import LeadingIcon from "./component/LeadingIcon";
import MenuText from "./component/MenuText";

const Wrapper = styled(ButtonWihtOutlineBase)`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  padding: 8px 16px;
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
