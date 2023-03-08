import { useRef, useEffect } from "react";

export const useCarouselScroll = () => {
  const elRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      //any 수정
      const handleWheel = (event: any) => {
        if (event.deltaY == 0) return;
        event.preventDefault();
        el.scrollTo({
          left: el.scrollTop + event.deltaY,
          behavior: "smooth",
        });
      };
      window.addEventListener("wheel", handleWheel, { passive: false });
    }
  }, []);
  return elRef;
};
