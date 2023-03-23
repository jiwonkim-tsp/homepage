import styled from "styled-components";
import { motion } from "framer-motion";
import colors from "@Constants/color";

export const $Wrapper = styled.div`
  position: relative;
  height: 100%;
`;

export const $ImgBox = styled(motion.div)`
  position: absolute;
  top: 13vw;
  left: -10vw;
  img {
    width: 60vw;
    transform: rotate(20deg);
  }
`;

export const $ContentWrapper = styled.div`
  transform: translate(47vw, 62vw);
`;

export const $Title = styled.h1`
  font-family: "NanumSquareEB";
  font-size: 3.5vw;
  margin: 2vw 0;
  color: ${colors["pink"]};
  text-transform: uppercase;
`;

export const $DescripWrapper = styled.div``;

export const $BtnWrapper = styled.div`
  transform: translateY(2vw);
`;
