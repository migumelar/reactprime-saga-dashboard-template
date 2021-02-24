import styled from "styled-components";

const Wrapper = styled.h3`
  margin-top: 0.5rem;
  font-weight: 400;
  font-size: 1.3rem;
  color: ${(props) => props.theme.textColorSecondary};
`;

const ContentSubTitle = ({ contentSubTitleText }) => {

  if (!contentSubTitleText) return null;

  return <Wrapper className="p-reset">{contentSubTitleText}</Wrapper>;
};

export default ContentSubTitle;
