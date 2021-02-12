import { Ripple } from "primereact/ripple";
import styled from "styled-components";
import theme from "../styles/theme";
import SidebarLogo from "./SidebarLogo";
import SidebarMenu from "./SidebarMenu";
import { useState } from "react";
import { Transition } from "react-transition-group";
import { useRef } from "react";

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.minimize ? "60px" : "225px")};
  height: 100%;
  background-color: ${theme.surfaceB};
  overflow-y: hidden;
`;

const HideSidebarButtonWrapper = styled.button`
  && {
    border-top: 1px solid ${theme.surfaceD};
    display: flex;
    padding: ${(props) => (props.minimize ? ".5rem" : "1rem")};
    align-items: center;
    justify-content: ${(props) => (props.minimize ? "center" : "flex-start")};
    font-family: ${theme.fontFamily};
    color: ${theme.textColor};
    cursor: pointer;

    & > div {
      font-size: 1.125rem;
    }

    &:hover {
      outline: 0 none;
      outline-offset: 0;
      box-shadow: 0 0 0 0.2rem #a6d5fa;
    }

    &:hover {
      background-color: ${theme.primaryColor};
      color: ${theme.primaryColorText};
    }

    & > i {
      font-size: ${(props) => (props.minimize ? "1.25rem" : "1.5rem")};
      margin-right: ${(props) => (props.minimize ? "0" : "1rem")};
    }
  }
`;

const sidebarTransitionDuration = 50;

const sidebarTransitionStyles = {
  entering: { transform: "translateX(-10%)" },
  entered: { transform: "translateX(0)" },
  exiting: { transform: "translateX(-1%)" },
  exited: { transform: "translateX(0)" },
};

const HideSidebarButton = ({ minimize, onClick }) => {
  return (
    <HideSidebarButtonWrapper
      onClick={onClick}
      minimize={minimize}
      className="p-reset p-ripple p-component"
    >
      <Ripple />
      <i className="pi pi-angle-double-left" />
      {minimize || <div>Minimize sidebar</div>}
    </HideSidebarButtonWrapper>
  );
};

function Sidebar(props) {
  const { animateType = "transform" } = props;
  const [minimize, setMinimize] = useState(false);
  const nodeRef = useRef(null);
  const _toggleMinimizeButton = () => setMinimize(!minimize);

  const sidebarDefaultStyle = {
    transition: `${animateType} ${sidebarTransitionDuration}ms ease-in-out`,
    transform: "translateX(0)",
  };

  return (
    <Transition
      in={minimize}
      timeout={sidebarTransitionDuration}
      nodeRef={nodeRef}
    >
      {(state) => (
        <SidebarWrapper
          ref={nodeRef}
          style={{ ...sidebarDefaultStyle, ...sidebarTransitionStyles[state] }}
          minimize={minimize}
          className="p-shadow-12"
        >
          <SidebarLogo minimize={minimize} src="/logo.png" />

          <SidebarMenu minimize={minimize} />

          <HideSidebarButton
            onClick={_toggleMinimizeButton}
            minimize={minimize}
          />
        </SidebarWrapper>
      )}
    </Transition>
  );
}

export default Sidebar;
