import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import AnimatedText from "./AnimatedText";

const container = {
  hidden: { opacity: 1, scale: 0, y: -20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Catchphrase = () => {
  const firstPhrase = "Begin Your";
  const letters = firstPhrase.split("");

  const placeholderText = [
    { type: "heading1", text: "Framer Motion" },
    {
      type: "heading2",
      text: "Animating responsive text!",
    },
  ];

  return (
    <$Wrapper
      className="container"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter) => {
        return <$Letter key={letter}>{letter}</$Letter>;
      })}
    </$Wrapper>
  );
};

export default Catchphrase;

const waviy = keyframes`
  0%,
  40%,
  100% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(-20px);
  }
`;

const $Wrapper = styled(motion.div)`
  /* height: 100vh; */
  color: white;
  font-size: 60px;
`;

const $Letter = styled(motion.span)`
  /* background-color: white; */
`;
