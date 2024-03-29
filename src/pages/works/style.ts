import styled from "styled-components";
import { motion } from "framer-motion";

export const $Wrapper = styled.div`
  width: 100vw;
  margin-top: 23vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15vw;
`;

export const $Works = styled(motion.ul)`
  display: grid;
  place-items: center;
  column-gap: 9vw;
  grid-template-columns: 30vw 30vw;
  @media (max-width: 480px) {
    grid-template-columns: 60vw;
    margin-top: 5vw;
  }
`;

export const $BtnWrapper = styled.div`
  margin-bottom: 8vw;
`;
