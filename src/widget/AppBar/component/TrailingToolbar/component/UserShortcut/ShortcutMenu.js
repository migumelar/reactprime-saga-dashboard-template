import styled from "styled-components";
import ReactDOM from "react-dom";

const Wrapper = styled.div`

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  width: 250px;
`;

const ShortcutMenuBackdrop = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  background-color: black;
  opacity: 0.75;
`;

const ShortcutMenuContent = styled.div`
  background-color: white;
  width: 100%;
  z-index: 150;
`;

const ShortcutMenu = () => {
  return ReactDOM.createPortal(
    <Wrapper>
      <ShortcutMenuContent>asdasd asda asd a adsadad adsa</ShortcutMenuContent>
      <ShortcutMenuBackdrop onClick={() => console.log("backdrop clicked")} />
    </Wrapper>,
    document.getElementById("shortcutMenuPortal")
  );
};

export default ShortcutMenu;
