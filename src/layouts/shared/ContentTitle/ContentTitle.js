import styled from "styled-components";

const Wrapper = styled.h1`
  font-weight: semibold;
  font-size: 2rem;
  @media ${(props) => props.theme.breakpoint.lg} {
    font-size: 2.5rem;
  }
`;

const ContentTitle = ({ contentTitleText }) => {
  if (!contentTitleText) return null;

  return <Wrapper className="p-reset">{contentTitleText}</Wrapper>;
};

export default ContentTitle;
