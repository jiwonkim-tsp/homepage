import {
  $Wrapper,
  $BorderRadius,
  $ContentWrapper,
  $Heading,
  $Content,
} from "./style";
import { motion, useScroll } from "framer-motion";
import { MotionValue } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface ITeamProps {
  scrollYProgress: MotionValue<number>;
}

const OurTeam = ({ scrollYProgress }: ITeamProps) => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollTop, setScrollTop] = useState(350);
  const [percent, setPercent] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollYProgress.onChange((value) => setScrollY(0.7 - value * 2));
  });

  // console.log(scrollY);

  return (
    <$Wrapper ref={wrapperRef}>
      <$BorderRadius
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={{ scaleY: scrollY }}
      />
      <$ContentWrapper>
        <$Heading>Our Team is</$Heading>
        <$Content>
          Make Your AR & XR Experiences TSP XR is a startup that researchers and
          developers solution that can implement various spatial information
          data on an urban and architectural scale through Augmented Reality
        </$Content>
      </$ContentWrapper>
    </$Wrapper>
  );
};

export default OurTeam;
