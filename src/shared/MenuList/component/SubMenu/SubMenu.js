import styled from "styled-components";
import { Ripple } from "primereact/ripple";
import ButtonWithOutlineBase from "../../../ButtonWithOutlineBase";
import LeadingIcon from "./component/LeadingIcon";
import MenuText from "./component/MenuText";

const Wrapper = styled(ButtonWithOutlineBase)`
  /* background-color: ${(props) =>
    props.minimize ? props.theme.surfaceC : "unset"}; */
  width: 100%;
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  padding: 8px;
  border-radius: 5px;
`;

const SubMenu = ({ leadingIcon, subMenuText }) => {
  return (
    <Wrapper>
      <Ripple />

      <LeadingIcon leadingIcon={`pi ${leadingIcon}`} />

      <MenuText subMenuText={subMenuText} />
    </Wrapper>
  );
};

export default SubMenu;
