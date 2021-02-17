import styled from "styled-components";
import { useRef, useState } from "react";
import { Transition } from "react-transition-group";
import theme from "../../styles/theme";
import MenuList from "../../shared/MenuList";
import AppLogo from "../../shared/AppLogo";
import MinimizeSidebarButton from "./component/MinimizeSidebarButton";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: ${(props) => (props.minimize ? "60px" : "225px")};
  height: 100%;
  background-color: ${theme.surfaceA};
  overflow-y: hidden;
`;

const StyledAppLogo = styled(AppLogo)`
  padding: 1.5rem;
`;

const sidebarTransitionDuration = 50;

const sidebarTransitionStyles = {
  entering: { transform: "translateX(-10%)" },
  entered: { transform: "translateX(0)" },
  exiting: { transform: "translateX(-1%)" },
  exited: { transform: "translateX(0)" },
};

const sidebarDefaultStyle = {
  transition: `transform ${sidebarTransitionDuration}ms ease-in-out`,
  transform: "translateX(0)",
};

const SidebarDesktop = () => {
  const [minimize, setMinimize] = useState(true);
  const nodeRef = useRef(null);

  const onClickHandle = () => setMinimize(!minimize);

  return (
    <Transition
      nodeRef={nodeRef}
      in={minimize}
      timeout={sidebarTransitionDuration}
    >
      {(state) => (
        <Wrapper
          ref={nodeRef}
          minimize={minimize}
          className="p-shadow-12"
          style={{ ...sidebarDefaultStyle, ...sidebarTransitionStyles[state] }}
        >
          {minimize || <StyledAppLogo src="/logo.png" />}

          <MenuList minimize={minimize} />

          <MinimizeSidebarButton onClick={onClickHandle} minimize={minimize} />
        </Wrapper>
      )}
    </Transition>
  );
};

export default SidebarDesktop;
