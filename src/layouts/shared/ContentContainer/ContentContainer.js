import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2rem;
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    margin-bottom:2rem;
`

const Title = styled.h1`
    font-weight: semibold;
    font-size: 2.5rem;
`

const SubtTitle = styled.h3`
    margin-top: .5rem;
    font-weight: 400;
    font-size: 1.3rem;
    color: ${props => props.theme.textColorSecondary};
`

const ContentContainer = ({ children }) => {
  return (
    <Wrapper>
        <TitleContainer>
            <Title className="p-reset">
                Create Products
            </Title>

            <SubtTitle className="p-reset">
                Add new product and set the categoriess
            </SubtTitle>
        </TitleContainer>
        {children}
    </Wrapper>
  );
};

export default ContentContainer;
