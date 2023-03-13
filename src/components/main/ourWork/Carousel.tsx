import { $Wrapper, $CarouselWrapper, $Item } from "./styleCarousel";
import { Link } from "react-router-dom";
import { ourWorkData } from "./../../../data/ourWorkData";
import {
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { useState, useEffect, useRef } from "react";

const Carousel = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const [scrollY, setScrollY] = useState(0);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 1000,
    damping: 100,
    restDelta: 0.001,
  });

  useEffect(() => {
    scrollYProgress.onChange((value) => setScrollY(value * 500));
  });

  useEffect(() => {
    scrollYProgress.onChange((value) => console.log(value * 500));
  });

  const yValue = useTransform(scaleX, [0.3, 1], [0, 100 * 5]);
  return (
    <$Wrapper>
      <$CarouselWrapper
        transition={{
          ease: "easeIn",
          duration: 0.7,
        }}
        style={{ x: yValue }}
      >
        {ourWorkData.map((list) => (
          <$Item key={list.id}>
            <Link to={list.link}>
              <img src={list.src} alt={list.src} />
            </Link>
          </$Item>
        ))}
      </$CarouselWrapper>
    </$Wrapper>
  );
};

export default Carousel;
