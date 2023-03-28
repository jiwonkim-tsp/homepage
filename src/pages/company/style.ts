import styled from "styled-components";
import { motion } from "framer-motion";

export const $Wrapper = styled.div`
  position: relative;
  margin-top: 10vw;
  display: flex;
  justify-content: center;
  @media (max-width: 480px) {
    margin-top: 15vw;
  }
`;

export const $ImgBox = styled(motion.div)<{ top: boolean }>`
  position: absolute;
  z-index: 1;
  top: ${({ top }) => (top ? "2vw" : "134vw")};
  left: ${({ top }) => (top ? "50vw" : "-10vw")};
  img {
    width: 55vw;
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
`;

export const $HistoryUl = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  gap: 10vw;
`;
