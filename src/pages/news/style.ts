import styled from "styled-components";
import { motion } from "framer-motion";

export const $Wrapper = styled.div`
  width: 100vw;
  height: 120vw;
  margin-top: 23vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 480px) {
    height: 240vw;
  }
`;

export const $News = styled(motion.ul)`
  display: grid;
  column-gap: 9vw;
  grid-template-columns: 35vw 35vw;
  @media (max-width: 480px) {
    grid-template-columns: 60vw;
    margin-top: 10vw;
  }
`;
