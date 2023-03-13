import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import Header from "../header/Header";
import Navigation from "../navigation/Navigation";
import { $Wrapper, $Background } from "./style";
import { useDimensions } from "./useDimension";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const ToggleMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef<HTMLDivElement>(null);
  const { height } = useDimensions(containerRef);

  console.log(toggleOpen);
  return (
    <$Wrapper
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <$Background variants={sidebar} />
      <Navigation />
      <Header toggle={() => toggleOpen()} />
    </$Wrapper>
  );
};

export default ToggleMenu;
