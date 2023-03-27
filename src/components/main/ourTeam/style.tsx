import styled from "styled-components";
import { motion } from "framer-motion";

export const $Wrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  padding: 12vw 0;
  margin-top: 10vw;
  height: 80vw;
`;

export const $ContentWrapper = styled.div`
  transform: translate(20vw, -10vw);
  @media (max-width: 480px) {
    transform: translate(10vw, -10vw);
  }
`;

export const $ImgBox = styled(motion.div)`
  position: absolute;
  top: 10vw;
  right: -10vw;
  img {
    width: 50vw;
  }
  @media (max-width: 480px) {
    top: 50vw;
  }
`;

export const $LogoWrapper = styled.div`
  img {
    width: 20vw;
  }
  @media (max-width: 480px) {
    img {
      width: 30vw;
    }
  }
`;

export const $DescripWrapper = styled.div`
  transform: translateY(-3vw);
`;

export const $BtnWrapper = styled.div`
  /* transform: translate(0vw, 0vw); */
`;
