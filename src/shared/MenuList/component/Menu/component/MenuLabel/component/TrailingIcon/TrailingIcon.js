import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  line-height: 1;
`;

const TrailingIcon = ({trailingIcon}) => (
  <Wrapper>
    <i className={`pi ${trailingIcon}`} />
  </Wrapper>
);

export default TrailingIcon;
