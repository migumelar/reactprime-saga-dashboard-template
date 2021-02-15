import styled from "styled-components";

const MenuText = ({ className, menuText }) => <div className={className}>{menuText}</div>;

export default styled(MenuText)`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  width: 100%;
`;
