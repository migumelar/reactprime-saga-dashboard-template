import styled from "styled-components";
import { Avatar } from "primereact/avatar";

const Wrapper = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: none;
  background-color: ${(props) => props.theme.surfaceA};
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.surfaceB};
    border-radius: 5px;
    outline: ${(props) => props.theme.ringOutline};
  }

  & > :first-child {
    background-color: ${(props) => props.theme.colors.green[500]};
    color: ${(props) => props.theme.primaryColorText};
  }

  & > div {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.textColor};

    & > i {
      margin: 0 0.3rem;
    }
  }
`;

const UserShortcut = () => {
  return (
    <Wrapper className="p-reset">
      <Avatar label="P" size="large" />

      <div>
        <i className="pi pi-chevron-down" />
      </div>
    </Wrapper>
  );
};

export default UserShortcut;
