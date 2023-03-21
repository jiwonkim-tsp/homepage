import styled from "styled-components";
import { motion } from "framer-motion";
import colors from "@Constants/color";

export const $Wrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  padding: 12vw 0;
  margin-top: 25vw;
`;

export const $ImgBox = styled(motion.div)`
  position: absolute;
  top: 10vw;
  right: -10vw;
  width: 50vw;
  img {
    width: 50vw;
  }
`;

export const $ContentWrapper = styled.div`
  padding: 4vw;
  transform: translateX(10vw);
`;

export const $Heading = styled.h1`
  font-size: 3.5vw;
  font-weight: bold;
  margin: 2vw 0;
  color: ${colors["pink"]};
  text-transform: uppercase;
`;

export const $Content = styled.div`
  font-family: "GothamBook";
  font-size: 3vw;
  line-height: 1.1;
`;

export const $Sentence = styled.p`
  color: #fff;
`;
export const $ColoredText = styled.span<{ color: string }>`
  color: ${({ color }) => colors[color]};
`;
