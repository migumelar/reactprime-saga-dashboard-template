import { useEffect, useRef, useState, useCallback } from "react";

const useViewport = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = useCallback((event) => {
    setWindowWidth(window.innerWidth);
  }, []);

  // listen to screen size changes
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowWidth]);

  return {
    windowWidth,
    setWindowWidth,
  };
};

export default useViewport;
