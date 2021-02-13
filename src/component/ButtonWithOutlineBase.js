import styled from "styled-components";
import theme from "../styles/theme";
import ringOutline from "../styles/ringOutline";

const ButtonWihtOutlineBase = styled.button`
  background-color: ${theme.surfaceA};
  color: ${theme.textColor};
  font-family: ${theme.fontFamily};
  cursor: pointer;

  &:hover, &:active {
    ${theme.primaryActiveState()}
  }

  &:focus,
  &:active {
    ${ringOutline}
  }
`;

export default ButtonWihtOutlineBase;
