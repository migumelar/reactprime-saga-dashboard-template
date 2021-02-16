import styled from "styled-components";
import { Ripple } from "primereact/ripple";
import ButtonWithOutlineBase from '../../../../shared/ButtonWithOutlineBase';

const Wrapper = styled(ButtonWithOutlineBase)`
  && {
    border-top: 1px solid ${props => props.theme.surfaceD};
    display: flex;
    padding: ${(props) => (props.minimize ? ".5rem" : "1rem")};
    align-items: center;
    justify-content: ${(props) => (props.minimize ? "center" : "flex-start")};
    
    & > div {
      font-size: 1.125rem;
    }

    & > i {
      font-size: ${(props) => (props.minimize ? "1.25rem" : "1.5rem")};
      margin-right: ${(props) => (props.minimize ? "0" : "1rem")};
    }

    &:focus {
      ${props => props.theme.primaryActiveState()}
    }
   
  }
`;


const MinimizeSidebarButton = ({ minimize, onClick }) => {
    return (
      <Wrapper
        onClick={onClick}
        minimize={minimize}
        className="rightTooltipHover rightTooltipFocus p-reset p-ripple p-component"
        data-pr-tooltip={`${minimize ? "Expand sidebar" : ""}`}
      >
        <Ripple />
        <i className={`pi ${ minimize ? "pi-angle-double-right" : "pi-angle-double-left"}`} />
        {minimize || <div>Minimize sidebar</div>}
      </Wrapper>
    );
  };
  
  export default MinimizeSidebarButton;