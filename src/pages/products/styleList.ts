import styled from "styled-components";
import { motion } from "framer-motion";
import colors from "@Constants/color";

export const $List = styled.li`
  display: flex;
  align-items: center;
`;

export const $ImgBox = styled(motion.div)<{ order: number }>`
  img {
    width: 50vw;
    transform: ${({ order }) =>
      order % 2 === 0
        ? "rotate(15deg) translateX(10vw)"
        : "rotate(-15deg) translateX(-10vw)"};
  }
`;

export const $ContentBox = styled.div<{ order: number; isSol: boolean }>`
  width: ${({ isSol }) => (isSol ? "55vw" : "50vw")};
  position: relative;
  z-index: 1;
  transform: ${({ order }) =>
    order % 2 === 0 ? "translate(10vw, -5vw)" : "translate(-5vw, -5vw)"};
  order: ${({ order }) => (order % 2 === 0 ? "-1" : "")};
`;

export const $Title = styled.h1`
  font-family: "NanumSquareEB";
  font-size: 3vw;
  margin: 2vw 0;
  color: ${colors["pink"]};
  text-transform: uppercase;
`;

export const $Content = styled.div`
  font-size: 2.7vw;
  line-height: 1.25;
`;

export const $Sentence = styled.span`
  color: #fff;
`;
export const $ColoredText = styled.span<{ color: string }>`
  color: ${({ color }) => colors[color]};
  word-break: keep-all;
  font-weight: ${({ color }) => (color !== "white" ? "bold" : "normal")};
`;
