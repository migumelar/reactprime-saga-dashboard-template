import styled from "styled-components";
import { Ripple } from "primereact/ripple";
import ButtonWithOutlineBase from "../../../../../../../ButtonWithOutlineBase";
import LeadingIcon from "./component/LeadingIcon";
import MenuText from "./component/MenuText";
// import Tooltip from '../../../../../../../Tooltip';
import {useTooltip} from "../../../../../../../Tooltip";

const Wrapper = styled(ButtonWithOutlineBase)`
  background-color: ${(props) =>
    props.minimize ? props.theme.surfaceC : "unset"};
  width: 100%;
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  padding: 8px;
  border-radius: 5px;
`;

const SubMenu = ({ leadingIcon, subMenuText, minimize }) => {
  const [tooltipClassName, Tooltip] = useTooltip({
    position: "right",
    event: "FocusAndHover",
  });

  console.log(tooltipClassName)
  return (
    <Wrapper
      minimize={minimize}
      className={tooltipClassName}
      data-pr-tooltip={minimize ? subMenuText : ""}
    >
      {Tooltip}

      <Ripple />

      <LeadingIcon leadingIcon={`pi ${leadingIcon}`} />

      {minimize || <MenuText subMenuText={subMenuText} />}
    </Wrapper>
  );
};

export default SubMenu;
