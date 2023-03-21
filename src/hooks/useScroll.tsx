import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScroll = () => {
  //페이지 이동시 스크롤을 최상단으로
  const scrollTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  //스크롤 비활성화
  const enableScroll = () => {
    useEffect(() => {
      document.body.style.cssText = `
        position: fixed;
        top: -${window.scrollY}px;
        overflow-y: scroll;
        width: 100%;`;
      return () => {
        const scrollY = document.body.style.top;
        document.body.style.cssText = "";
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      };
    }, []);
  };

  return { scrollTop, enableScroll };
};

export default useScroll;
