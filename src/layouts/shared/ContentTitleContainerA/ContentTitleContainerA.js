import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  margin-bottom: 2rem;
`;

const ContentTitleContainerA = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ContentTitleContainerA;
