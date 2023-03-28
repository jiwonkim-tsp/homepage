import styled from "styled-components";
import { motion } from "framer-motion";
import colors from "@Constants/color";

export const $Wrapper = styled.div`
  width: 100vw;
  height: 220vw;
  position: relative;
  margin-top: 10vw;
  display: flex;
  justify-content: center;
  @media (max-width: 480px) {
    margin-top: 25vw;
    height: 270vw;
  }
`;

export const $ImgBox = styled(motion.div)<{ top: boolean }>`
  height: 50vw;
  position: absolute;
  z-index: 1;
  top: ${({ top }) => (top ? "2vw" : "174vw")};
  left: ${({ top }) => (top ? "50vw" : "-10vw")};
  img {
    overflow-x: hidden;
    width: 55vw;
  }
  @media (max-width: 480px) {
    top: ${({ top }) => (top ? "2vw" : "224vw")};
  }
`;

export const $LogoBox = styled(motion.div)`
  position: absolute;
  z-index: 2;
  top: 6vw;
  left: 10vw;
  img {
    width: 75vw;
  }
`;

export const $ContentWrapper = styled.div`
  height: 120vw;
  position: absolute;
  z-index: 2;
  top: 45vw;
  display: flex;
  flex-direction: column;
  gap: 18vw;
  margin-top: 5vw;
`;

export const $Explanation = styled.div`
  margin: auto;
  padding: 0 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5vw;
`;

export const $Sentence = styled.p`
  color: #fff;
  font-family: "NanumSquare";
  font-size: 2.5vw;
  word-break: keep-all;
  :nth-child(2) {
    margin-bottom: 3vw;
  }
  @media (max-width: 480px) {
    font-size: 4vw;
  }
`;
export const $ColoredText = styled.span<{ color: string }>`
  color: ${({ color }) => colors[color]};
  font-family: ${({ color }) =>
    color !== "white" ? "NanumSquareEB" : "NanumSquare"};
`;

export const $HistoryUl = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10vw;
`;
