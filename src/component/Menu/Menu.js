import styled from "styled-components";

const Wrapper =  styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  width: 100%;
`;

const Menu = ({ className, children }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default Menu;
