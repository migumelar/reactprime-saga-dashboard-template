import styled from "styled-components";
import ReactDOM from "react-dom";

// TODO : RESPONSIVE MENU BAR AND RESPONSIVE APP BAR
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  position: relative;
  background-color: red;
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
  opacity: 0;
`;

const ShortcutMenuContent = styled.div`
  position: fixed;
  background-color: ${(props) => props.theme.surfaceA};
  width: 250px;
  z-index: 150;
  top: ${(props) => props.topPosition}px;
  right: ${(props) => props.rightPosition}px;
  padding: 1rem;
  border-radius: 3px;
  transition: transform 500ms ease-in-out;
`;

const ShortcutMenu = ({ parentRef, isMenuOpen, setIsMenuOpen, appBarRef }) => {
  if (!isMenuOpen) return null;

  const rightPosition =
    document.body.clientWidth -
    (parentRef.current.offsetLeft + parentRef.current.offsetWidth);

  const topPosition =
    appBarRef.current.offsetHeight + appBarRef.current.offsetTop;

  return ReactDOM.createPortal(
    <Wrapper>
      <ShortcutMenuContent
        className="p-shadow-4"
        rightPosition={rightPosition}
        topPosition={topPosition}
      >
        Logout
      </ShortcutMenuContent>
      <ShortcutMenuBackdrop onClick={() => setIsMenuOpen(false)} />
    </Wrapper>,
    document.getElementById("shortcutMenuPortal")
  );
};

export default ShortcutMenu;
