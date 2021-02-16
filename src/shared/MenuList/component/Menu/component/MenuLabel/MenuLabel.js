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

const MenuLabel = (props) => {

  const { onClick, leadingIcon, menuText } = props
  
  return (
    <Wrapper onClick={onClick}>
      <Ripple />

      <LeadingIcon leadingIcon={`pi ${leadingIcon}`} />

      <MenuText menuText={menuText} />

      <TrailingIcon />
    </Wrapper>
  );
};

export default MenuLabel;
