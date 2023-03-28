import styled from "styled-components";
import { motion } from "framer-motion";
import colors from "@Constants/color";

export const $List = styled.li`
  display: flex;
  align-items: center;
`;

export const $ImgBox = styled(motion.div)<{ order: number }>`
  img {
    overflow-x: hidden;
    width: 50vw;
    transform: ${({ order }) =>
      order % 2 === 0
        ? "rotate(15deg) translateX(15vw)"
        : "rotate(-15deg) translateX(-10vw)"};
  }
  @media (max-width: 480px) {
    img {
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
    order % 2 === 0 ? "translate(5vw, -5vw)" : "translate(-5vw, -5vw)"};
  order: ${({ order }) => (order % 2 === 0 ? "-1" : "")};
  @media (max-width: 480px) {
    width: 60vw;
    transform: ${({ order }) =>
      order % 2 === 0 ? "translate(15vw, -5vw)" : "translate(-5vw,-5vw)"};
  }
`;

export const $Title = styled.h1`
  font-family: "NanumSquareEB";
  font-size: 2.8vw;
  margin: 2vw 0;
  color: ${colors["pink"]};
  @media (max-width: 480px) {
    font-size: 4vw;
  }
`;

export const $Content = styled.div`
  width: 40vw;
  font-size: 2vw;
  line-height: 1.25;
  @media (max-width: 480px) {
    width: 50vw;
    font-size: 3.5vw;
  }
`;

export const $Sentence = styled.span`
  color: #fff;
`;
export const $ColoredText = styled.span<{ color: string }>`
  color: ${({ color }) => colors[color]};
  word-break: keep-all;
  font-family: ${({ color }) =>
    color !== "white" ? "NanumSquareEB" : "NanumSquare"};
`;
