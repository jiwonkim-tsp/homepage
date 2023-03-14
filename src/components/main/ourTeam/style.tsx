import styled from "styled-components";
import { motion } from "framer-motion";

export const $Wrapper = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  transform: translate3d(0px, -75px, 0px);
  background-color: red;
`;

export const $ContentWrapper = styled.div`
  padding: 10vw;
`;

export const $ImgBox = styled(motion.div)`
  position: absolute;
  top: 20%;
  right: 0%;
  width: 50vw;
  img {
    width: 50vw;
  }
`;
