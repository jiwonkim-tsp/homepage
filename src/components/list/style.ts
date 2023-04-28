import styled from "styled-components";
import { motion } from "framer-motion";
import colors from "@Constants/color";

export const $List = styled.li`
  height: 40vw;
  display: flex;
  align-items: center;
  @media (max-width: 480px) {
    flex-direction: column;
    height: auto;
    flex-grow: 1;
  }
`;

export const $ImgBox = styled(motion.div)<{ order: number }>`
  img {
    width: 30vw;
    transform: ${({ order }) =>
      order % 2 === 0
        ? "rotate(15deg) translateX(20vw)"
        : "rotate(-15deg) translateX(-20vw)"};
  }
  @media (max-width: 480px) {
    img {
      width: 50vw;
      transform: ${({ order }) =>
        order % 2 === 0
          ? "rotate(15deg) translateX(10vw)"
          : "rotate(-15deg) translateX(0vw)"};
    }
  }
`;

export const $ContentBox = styled.div<{ order: number }>`
  width: "50vw";
  position: relative;
  z-index: 1;
  transform: ${({ order }) =>
    order % 2 === 0 ? "translate(15vw, 0vw)" : "translate(-10vw, -2vw)"};
  order: ${({ order }) => (order % 2 === 0 ? "-1" : "")};
  @media (max-width: 480px) {
    flex-grow: 1;
    width: 60vw;
    order: 0;
    /* transform: ${({ order }) =>
      order % 2 === 0 ? "translate(15vw, -5vw)" : "translate(10vw,-5vw)"}; */
  }
`;

export const $Title = styled.h1`
  font-family: "NanumSquareEB";
  font-size: 2vw;
  margin: 2vw 0;
  word-break: keep-all;
  color: ${colors["pink"]};
  @media (max-width: 480px) {
    width: 40vw;
    font-size: 4vw;
    line-height: 1.1;
  }
`;

export const $Content = styled.div`
  width: 45vw;
  font-size: 1.4vw;
  line-height: 1.25;
  @media (max-width: 480px) {
    width: 60vw;
    font-size: 3.5vw;
    margin-bottom: 6vw;
  }
`;

export const $Sentence = styled.span`
  color: #fff;
`;
export const $ColoredText = styled.p<{ color: string }>`
  color: ${({ color }) => colors[color]};
  word-break: keep-all;
  font-family: ${({ color }) =>
    color !== "white" ? "NanumSquareEB" : "NanumSquare"};
`;
