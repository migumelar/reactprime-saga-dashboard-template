import styled from "styled-components";
import SubMenu from "./component/SubMenu";

const Wrapper = styled.ul`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  margin-top: 0.25rem;
  align-self: ${(props) => (props.minimize ? "unset" : "stretch")};
  margin-left: ${(props) => (props.minimize ? "unset" : "2.5rem")};
  margin-right: ${(props) => (props.minimize ? "unset" : "0.5rem")};

  & > * {
    margin-bottom: 0.2rem;
  }

  & > :last-child {
    margin-bottom: 0.5rem;
  }
`;

const SubMenuList = ({ minimize }) => {
  return (
    <Wrapper className="p-reset" minimize={minimize}>
      <SubMenu
        leadingIcon="pi-wallet"
        subMenuText="Some report"
        minimize={minimize}
      />
    </Wrapper>
  );
};

export default SubMenuList;
