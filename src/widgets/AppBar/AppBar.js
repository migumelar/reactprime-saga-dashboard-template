import { useRef } from "react";
import styled from "styled-components";
import LeadingToolbar from "./component/LeadingToolbar";
import ToggleSidebarMobileButton from "./component/LeadingToolbar/component/ToggleSidebarMobileButton";
import TrailingToolbar from "./component/TrailingToolbar";

const Wrapper = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.surfaceD};
  background-color: ${props => props.theme.surfaceA};

`;

const AppBarTitle = styled.div`
  font-weight: 400;
  font-size: 1.3rem;
`

const AppBar = () => {
  const appBarRef = useRef(null);

  return (
    <Wrapper ref={appBarRef}>
      <LeadingToolbar>
        <ToggleSidebarMobileButton className="pi p-reset p-ripple" />
        <AppBarTitle>Some Long Title</AppBarTitle>
      </LeadingToolbar>

      <TrailingToolbar appBarRef={appBarRef} />
    </Wrapper>
  );
};

export default AppBar;
