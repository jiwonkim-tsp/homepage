import styled from "styled-components";
import { motion } from "framer-motion";

export const $Wrapper = styled.div`
  position: relative;
  top: 9vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4vw;
`;

export const $VideoWrapper = styled.div`
  position: absolute;
  z-index: 1;
  height: 50vw;
  top: 0;
  left: 0;
  width: 100%;
  video {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const $Phrases = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(6vw) rotate(-10deg);
`;

export const $BtnWrapper = styled.div`
  z-index: 1;
  transform: translateY(10vw);
`;
