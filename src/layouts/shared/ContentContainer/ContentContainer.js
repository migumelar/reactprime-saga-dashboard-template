import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2rem;
`;

const ContentContainer = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ContentContainer;
