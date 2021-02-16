import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 1rem;
  display: flex;
  align-items: center;
`;

const LeadingIcon = ({ leadingIcon }) => (
    <Wrapper>
      <i className={`pi ${leadingIcon}`} />
    </Wrapper>
  );

export default LeadingIcon;
