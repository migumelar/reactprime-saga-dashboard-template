import styled from "styled-components";
import LeadingToolbar from "./component/LeadingToolbar";
import ToggleSidebarMobileButton from "./component/LeadingToolbar/component/ToggleSidebarMobileButton";

const Wrapper = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.surfaceC};
`;

const AppBar = () => {
  return (
    <Wrapper>
      <LeadingToolbar>
        <ToggleSidebarMobileButton className="pi p-reset p-ripple" />
      </LeadingToolbar>
    </Wrapper>
  );
};

export default AppBar;
