import styled from "styled-components";
import { Ripple } from "primereact/ripple";
import { SidebarMobileContext } from "../../../../../SidebarMobile";
import { useContext } from "react";

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;

  @media ${(props) => props.theme.breakpoint.lg} {
    display: none;
  }

  & > i {
    font-size: 1.2rem;
  }
`;

const ToggleSidebarMobileButton = ({ className }) => {
  const { sidebarMobileVisible, setSidebarMobileVisible } = useContext(
    SidebarMobileContext
  );

  return (
    <Wrapper
      className={className}
      onClick={() => setSidebarMobileVisible(!sidebarMobileVisible)}
    >
      <Ripple />

      <i className="pi pi-bars" />
    </Wrapper>
  );
};

export default ToggleSidebarMobileButton;
