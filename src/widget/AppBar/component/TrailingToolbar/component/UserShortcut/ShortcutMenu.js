import styled from "styled-components";
import ReactDOM from "react-dom";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  /* align-items: flex-end; */
  position: relative;
  background-color: red;
  /* width: 250px; */
  /* top: 100%; */
  /* right: 0; */
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
  position: fixed;
  background-color: white;
  width: 250px;
  z-index: 150;
  top: 0;
  right: 20px;
`;

const ShortcutMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  if (!isMenuOpen) return null;

  return ReactDOM.createPortal(
    <Wrapper>
      <ShortcutMenuContent>asdasd asda asd a adsadad adsa</ShortcutMenuContent>
      <ShortcutMenuBackdrop onClick={() => setIsMenuOpen(false)} />
    </Wrapper>,
    document.getElementById("shortcutMenuPortal")
  );
};

export default ShortcutMenu;
