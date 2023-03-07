import { useRef, useEffect } from "react";

export const useCarouselScroll = () => {
  const elRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const handleWheel = (event: any) => {
        // console.log(event.deltaY);
        if (event.deltaY == 0) return;
        event.preventDefault();
        console.log(el.scrollLeft);
        el.scrollTo({
          left: el.scrollLeft + event.deltaY * 10,
          behavior: "smooth",
        });
      };
      el.addEventListener("wheel", handleWheel);
    }
  }, []);
  return elRef;
};
