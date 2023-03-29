import styled from "styled-components";
import colors from "@Constants/color";
import { motion } from "framer-motion";

export const $List = styled(motion.li)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5vw;
  @media (max-width: 480px) {
    width: 80vw;
  }
`;

export const $Year = styled.div`
  font-weight: bold;
  font-size: 2.7vw;
  color: ${colors["pink"]};
  margin-bottom: 1.5vw;
  @media (max-width: 480px) {
    font-size: 4.2vw;
  }
`;
