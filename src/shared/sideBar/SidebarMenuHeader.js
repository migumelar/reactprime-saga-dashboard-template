import styled from "styled-components";
import theme from "../../styles/theme";

const SidebarMenuHeader = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: 900;
  color: ${theme.textColorSecondary};
  letter-spacing: 1px;
  font-size: 0.75rem;

  && {
    margin-bottom: 1rem;
  }
`;

export default SidebarMenuHeader;