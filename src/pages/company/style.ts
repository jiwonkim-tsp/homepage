import styled from "styled-components";
import { motion } from "framer-motion";
import colors from "@Constants/color";

export const $Wrapper = styled.div`
  width: 100vw;
  height: 120vw;
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
  position: absolute;
  z-index: 1;
  top: ${({ top }) => (top ? "2vw" : "100vw")};
  left: ${({ top }) => (top ? "50vw" : "-10vw")};
  img {
    width: 30vw;
  }
  @media (max-width: 480px) {
    img {
      width: 50vw;
    }
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
    width: 40vw;
  }
  @media (max-width: 480px) {
    img {
      width: 75vw;
    }
  }
`;

export const $ContentWrapper = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  margin-top: 30vw;
  @media (max-width: 480px) {
    margin-top: 5vw;
    top: 45vw;
    height: 90vw;
  }
`;

export const $Explanation = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1vw;
  @media (max-width: 480px) {
    padding: 0 10vw 15vw 10vw;
    gap: 1.5vw;
  }
`;

export const $Sentence = styled.p`
  color: #fff;
  font-family: "NanumSquare";
  font-size: 1.5vw;
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
  gap: 5vw;
  margin-top: 10vw;
  @media (max-width: 480px) {
    margin-top: 0vw;
    gap: 10vw;
  }
`;
