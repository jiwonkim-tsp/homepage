import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//페이지 이동시 최상단으로 스크롤 이동할 수 있도록
const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollTop;
