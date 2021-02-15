import styled from "styled-components";

const TrailingIcon = ({ className }) => (
  <div className={className}>
    <i className="pi pi-chevron-down" />
  </div>
);

export default styled(TrailingIcon)`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  line-height: 1;
`;
