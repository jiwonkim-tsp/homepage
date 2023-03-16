import styled from "styled-components";
import { motion } from "framer-motion";
import colors from "./../../../constants/color";

export const $Wrapper = styled.div`
  position: relative;
  height: 100%;
`;

export const $ButtonWrapper = styled.div`
  position: absolute;
  transform: translate(65vw, 40vw);
`;

export const $ImgBox = styled(motion.div)`
  position: absolute;
  top: 10vw;
  left: -10vw;
  width: 60vw;
  img {
    width: 60vw;
    transform: rotate(20deg);
  }
`;

export const $ContentWrapper = styled.div`
  transform: translate(50vw, 50vw);
`;

export const $Heading = styled.h1`
  font-size: 3.5vw;
  font-weight: bold;
  margin: 25px 0;
  color: ${colors["pink"]};
  text-transform: uppercase;
`;

export const $Content = styled.div`
  font-family: "GothamBook";
  font-size: 3vw;
  line-height: 1.25;
`;

export const $Sentence = styled.p`
  color: #fff;
`;
export const $ColoredText = styled.span<{ color: string }>`
  color: ${({ color }) => colors[color]};
`;
