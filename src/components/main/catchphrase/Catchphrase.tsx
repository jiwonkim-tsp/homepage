import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

const Catchphrase = () => {
  const firstPhrase = "Begin Your";
  const splitedPhrase = firstPhrase.split("");
  return (
    <$Wrapper>
      {splitedPhrase.map((item, index) => (
        <$Letter key={item} delay={index}>
          {item}
        </$Letter>
      ))}
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

const $Wrapper = styled.div`
  /* height: 100vh; */
  color: white;
  position: relative;
  -webkit-box-reflect: below -20px linear-gradient(transparent, rgba(0, 0, 0, 0.2));
  font-size: 60px;
`;

const $Letter = styled.span<{ delay: number }>`
  position: relative;
  display: inline-block;
  color: #fff;
  text-transform: uppercase;
  animation: ${waviy} 1s infinite;
  animation-delay: calc(0.1s * delay);
  /* &:nth-child(1) {
    animation-delay: 0.1s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.3s;
  }
  &:nth-child(4) {
    animation-delay: 0.4s;
  }
  &:nth-child(5) {
    animation-delay: 0.5s;
  } */
`;
