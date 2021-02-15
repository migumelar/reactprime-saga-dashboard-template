import styled from "styled-components";

const LeadingIcon = ({ className, leadingIcon }) => (
  <div className={className}><i className={`pi ${leadingIcon}`}/></div>
);

export default styled(LeadingIcon)`
  font-size: 1.25rem;
`;
