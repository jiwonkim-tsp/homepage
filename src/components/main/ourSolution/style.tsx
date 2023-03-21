import styled from "styled-components";
import colors from "@Constants/color";
import { motion } from "framer-motion";

export const $Wrapper = styled.div`
  width: 100vw;
  height: 70vw;
  position: relative;
`;

export const $PositionWrapper = styled.div`
  transform: translate(30vw, 30vw);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const $ImgBtnWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 1vw 0;
  @media screen and (max-width: 520px) {
    margin-right: 10vw;
    width: 65vw;
  }
`;

export const $ImgBox = styled(motion.div)`
  img {
    width: 35vw;
  }
`;

export const $ContentWrapper = styled.div`
  transform: translateX(18vw);
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
  line-height: 1.25;
`;

export const $Sentence = styled.p`
  color: #fff;
`;
export const $ColoredText = styled.span<{ color: string }>`
  color: ${({ color }) => colors[color]};
`;
