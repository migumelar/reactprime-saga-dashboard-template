import styled from "styled-components";
import theme from "../styles/theme";
import ringOutline from "../styles/ringOutline";

const ButtonWihtOutlineBase = styled.button`
  background-color: transparent;
  color: ${theme.textColor};
  font-family: ${theme.fontFamily};

  &:hover {
    cursor: pointer;
    background-color: ${theme.primaryColor};
    color: ${theme.primaryColorText};
  }

  &:focus,
  &:active {
    ${ringOutline}
  }
`;

export default ButtonWihtOutlineBase;
