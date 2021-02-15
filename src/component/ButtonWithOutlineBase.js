import styled from "styled-components";
import theme from "../styles/theme";
import ringOutline from "../styles/ringOutline";

const ButtonBase = styled.button`
  background-color: ${theme.surfaceA};
  color: ${theme.textColor};
  font-family: ${theme.fontFamily};
  cursor: pointer;

  &:hover,
  &:active {
    ${theme.primaryActiveState()}
  }

  &:focus,
  &:active {
    ${ringOutline}
  }
`;

const ButtonWihtOutlineBase = ({ className, children }) => (
  <ButtonBase className={`p-reset ${className}`}>{children}</ButtonBase>
);

export default ButtonWihtOutlineBase;
