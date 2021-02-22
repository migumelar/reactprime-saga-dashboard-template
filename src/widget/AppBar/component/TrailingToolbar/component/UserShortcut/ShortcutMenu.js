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
  opacity: 0;
`;

const ShortcutMenuContent = styled.div`
  position: fixed;
  background-color: ${props => props.theme.surfaceA};
  width: 250px;
  z-index: 150;
  top: ${(props) => props.topPosition}px;
  right: ${(props) => props.rightPosition}px;
  padding: 1rem;
  border-radius: 3px;
`;

const ShortcutMenu = ({ parentRef, isMenuOpen, setIsMenuOpen, appBarRef }) => {
  if (!isMenuOpen) return null;

  const rightPosition =
    document.body.clientWidth -
    (parentRef.current.offsetLeft + parentRef.current.offsetWidth);

  const topPosition =
    appBarRef.current.offsetHeight + appBarRef.current.offsetTop;

  console.log(appBarRef);

  //   console.log(leftPosition);

  //   console.log(parentRef);

  return ReactDOM.createPortal(
    <Wrapper>
      <ShortcutMenuContent
        className="p-shadow-4"
        rightPosition={rightPosition}
        topPosition={topPosition}
      >
        asdasd asda asd a adsadad adsa
      </ShortcutMenuContent>
      <ShortcutMenuBackdrop onClick={() => setIsMenuOpen(false)} />
    </Wrapper>,
    document.getElementById("shortcutMenuPortal")
  );
};

export default ShortcutMenu;
