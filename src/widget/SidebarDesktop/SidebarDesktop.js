import styled from "styled-components";
import theme from "../../styles/theme";
import MenuList from "../../shared/MenuList";
import AppLogo from "../../shared/AppLogo";
import MinimizeSidebarButton from "./component/MinimizeSidebarButton";
import { useState } from "react";

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

const SidebarDesktop = () => {
  const [minimize, setMinimize] = useState(true);

  const onClickHandle = () => setMinimize(!minimize);

  return (
    <Wrapper minimize={minimize} className="p-shadow-12">
      
      {minimize || <StyledAppLogo src="/logo.png" />}

      <MenuList minimize={minimize} />

      <MinimizeSidebarButton onClick={onClickHandle} minimize={minimize}/>

    </Wrapper>
  );
};

export default SidebarDesktop;
