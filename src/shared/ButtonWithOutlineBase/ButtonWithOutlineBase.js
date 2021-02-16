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

const ButtonWihtOutlineBase = ({
  className,
  children,
  onClick,
  "data-pr-tooltip": tooltipText,
}) => (
  <Wrapper
    onClick={onClick}
    className={`p-reset p-ripple ${className}`}
    data-pr-tooltip={tooltipText}
  >
    {children}
  </Wrapper>
);

export default ButtonWihtOutlineBase;
