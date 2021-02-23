import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items:center;
`

const LeadingToolbar = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default LeadingToolbar;
