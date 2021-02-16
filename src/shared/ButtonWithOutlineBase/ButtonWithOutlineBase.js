import styled from "styled-components";
import theme from "../../styles/theme";
import ringOutline from "../../styles/ringOutline";

const Wrapper = styled.button`
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
  <Wrapper className={`p-reset p-ripple ${className}`}>{children}</Wrapper>
);

export default ButtonWihtOutlineBase;
