import styled from "styled-components";
import colors from "@Constants/color";
import { motion } from "framer-motion";

export const $List = styled(motion.li)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.3vw;
  :nth-child(1) {
    margin-bottom: 7vw;
    gap: 0;
  }
`;

export const $Year = styled.div`
  font-weight: bold;
  font-size: 2.7vw;
  color: ${colors["pink"]};
  margin-bottom: 1.5vw;
`;
