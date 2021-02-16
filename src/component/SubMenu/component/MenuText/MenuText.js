import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  width: 100%;
`;

const MenuText = ({ subMenuText }) => <Wrapper>{subMenuText}</Wrapper>;

export default MenuText;
