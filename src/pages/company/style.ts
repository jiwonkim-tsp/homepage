import styled from "styled-components";
import { motion } from "framer-motion";
import colors from "@Constants/color";

export const $Wrapper = styled.div`
  width: 100vw;
  height: 200vw;
  position: relative;
  margin-top: 10vw;
  display: flex;
  justify-content: center;
  @media (max-width: 480px) {
    margin-top: 25vw;
    height: 260vw;
  }
`;

export const $ImgBox = styled(motion.div)<{ top: boolean }>`
  height: 60vw;
  position: absolute;
  z-index: 1;
  top: ${({ top }) => (top ? "2vw" : "154vw")};
  left: ${({ top }) => (top ? "50vw" : "-10vw")};
  img {
    width: 50vw;
  }
  @media (max-width: 480px) {
    top: ${({ top }) => (top ? "2vw" : "215vw")};
  }
`;

export const $LogoBox = styled(motion.div)`
  width: 100vw;
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 2;
  top: 6vw;
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
  margin-top: 5vw;
`;

export const $Explanation = styled.div`
  margin: auto;
  padding: 0 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5vw;
  @media (max-width: 480px) {
    padding: 0 10vw 15vw 10vw;
  }
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
