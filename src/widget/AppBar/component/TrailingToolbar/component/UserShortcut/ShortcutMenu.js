import styled from "styled-components";
import ReactDOM from "react-dom";
import { useEffect, useRef, useState, useCallback } from "react";

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

const ShortcutMenuContent = styled.div.attrs((props) => ({
  style: {
    top: props.YPosition + "px",
    left: ( props.windowWidth > props.theme.screenBreakpoint.md ? props.XPosition : 0) + "px",
  },
}))`
  position: fixed;
  background-color: ${(props) => props.theme.surfaceA};
  left: 0;
  width: 100%;
  z-index: 150;
  padding: 1rem;
  border-radius: 3px;

  @media ${(props) => props.theme.breakpoint.md} {
    width: unset;
  }
`;

const ShortcutMenu = ({
  parentRef,
  isMenuOpen,
  setIsMenuOpen,
  appBarRef,
  menuPosition = "right",
}) => {
  const currentRef = useRef(null);
  const [XPosition, setXPosition] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = useCallback((event) => {
    setWindowWidth(window.innerWidth);
  }, []);

  // calculate submenu position
  useEffect(() => {
    if (isMenuOpen) {
      let right =
        parentRef.current.offsetLeft +
        parentRef.current.offsetWidth -
        currentRef.current.clientWidth;

      let left = parentRef.current.offsetLeft;

      setXPosition(menuPosition === "right" ? right : left);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMenuOpen, windowWidth]);

  if (!isMenuOpen) return null;

  const YPosition =
    appBarRef.current.offsetHeight + appBarRef.current.offsetTop;

  return ReactDOM.createPortal(
    <Wrapper>
      <ShortcutMenuContent
        className="p-shadow-4"
        windowWidth={windowWidth}
        XPosition={XPosition}
        YPosition={YPosition}
        ref={currentRef}
      >
        Logout
      </ShortcutMenuContent>
      <ShortcutMenuBackdrop onClick={() => setIsMenuOpen(false)} />
    </Wrapper>,
    document.getElementById("shortcutMenuPortal")
  );
};

export default ShortcutMenu;
