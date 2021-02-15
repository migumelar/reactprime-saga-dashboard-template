import styled from "styled-components";
import { LeadingIcon, MenuText, SubMenu } from "./SubMenu";

export default styled(SubMenu)`
  background-color: ${(props) => (props.minimize ? props.theme.surfaceC : "unset")};
  width: 100%;
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  padding: 8px;
  border-radius: 5px;

  ${LeadingIcon} {
    font-size: 1rem;
    display: flex;
    align-items: center;
  }

  ${MenuText} {
    display: flex;
    align-items: center;
    margin-left: 1rem;
    width: 100%;
  }
`;
