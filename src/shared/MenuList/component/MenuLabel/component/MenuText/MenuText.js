import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  width: 100%;
`;

const MenuText = ({ menuText }) => <Wrapper>{menuText}</Wrapper>;

export default MenuText;
