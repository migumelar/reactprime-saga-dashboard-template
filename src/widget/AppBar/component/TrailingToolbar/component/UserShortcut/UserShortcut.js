import styled from "styled-components";
import { Avatar } from "primereact/avatar";
import ShortcutMenu from './ShortcutMenu';

const Wrapper = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: none;
  background-color: ${(props) => props.theme.surfaceA};
  position: relative;
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

// const ShortcutMenuBackdrop = styled.div`
//   position: fixed;
//   z-index: 100;
//   top: 0;
//   left: 0;
//   height: 100vh;
//   width: 100vw;
//   border: 1px solid black;
//   display: flex;
//   flex-direction: column;
//   background-color: black;
//   opacity: 1;
//   /* cursor: wait; */
// `;

// const ShortcutMenuContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-end;
//   position: absolute;
//   top: 100%;
//   right: 0;
//   background-color: white;
//   width: 250px;
// `;

const UserShortcut = () => {
  return (
    <Wrapper className="p-reset" onClick={()=> console.log('shortcut clicked')}>
      <Avatar label="P" size="large" />

      <div>
        <i className="pi pi-chevron-down" />
      </div>

      <ShortcutMenu/>

      {/* <ShortcutMenuContent>
        <div style={{ zIndex: 150, backgroundColor: "white", width: '100%' }}>
          asdasd asda asd a adsadad adsa
        </div>
        <ShortcutMenuBackdrop onClick={()=> console.log('backdrop clicked')}></ShortcutMenuBackdrop>
      </ShortcutMenuContent> */}
    </Wrapper>
  );
};

export default UserShortcut;
