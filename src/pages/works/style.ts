import styled from "styled-components";
import { motion } from "framer-motion";

export const $Wrapper = styled.div`
  width: 100vw;
  margin-top: 16vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15vw;
`;

export const $Works = styled(motion.ul)`
  display: grid;
  place-items: center;
  column-gap: 9vw;
  row-gap: 7vw;
  grid-template-columns: 30vw 30vw;
  margin-top: 7vw;
  @media (max-width: 480px) {
    grid-template-columns: 60vw;
    margin-top: 5vw;
  }
`;

export const $BtnWrapper = styled.div`
  margin-bottom: 8vw;
`;
