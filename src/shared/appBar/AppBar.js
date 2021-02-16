import styled from "styled-components";
import theme from "../../styles/theme";
import { Avatar } from "primereact/avatar";
import { Ripple } from "primereact/ripple";

const AppBarWrapper = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid ${theme.surfaceC};
`;

const ProfilMenu = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: none;
  background-color: ${theme.surfaceA};
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${theme.surfaceB};
    border-radius: 5px;
    outline: ${theme.ringOutline};
  }

  & > :first-child {
    background-color: ${theme.colors.green[500]};
    color: ${theme.primaryColorText};
  }

  & > div {
    display: flex;
    align-items: center;
    color: ${theme.textColor};

    & > i {
      margin: 0 0.3rem;
    }
  }
`;

const ToggleMobileSidebarButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  
  @media ${theme.breakpoint.lg} {
    display: none;
  }

  & > i {
    font-size: 1.2rem;
  }
`;

function AppBar() {
  return (
    <AppBarWrapper className="p-shadow-2">
      <div>
        <ToggleMobileSidebarButton className="p-reset p-ripple">
          <Ripple />
          <i className="pi pi-bars" />
        </ToggleMobileSidebarButton>
      </div>

      <div>
        <ProfilMenu className="p-reset">
          <Avatar label="P" size="large" />
          <div>
            <i className="pi pi-chevron-down" />
          </div>
        </ProfilMenu>
      </div>
    </AppBarWrapper>
  );
}

export default AppBar;
