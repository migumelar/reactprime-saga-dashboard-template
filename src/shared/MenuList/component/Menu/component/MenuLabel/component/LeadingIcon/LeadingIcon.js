import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 1.25rem;
`;

const LeadingIcon = ({ leadingIcon }) => (
  <Wrapper>
    <i className={`pi ${leadingIcon}`} />
  </Wrapper>
);

export default LeadingIcon;
