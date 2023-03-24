import styled from "styled-components";
import { motion } from "framer-motion";

export const $Wrapper = styled.div`
  margin-top: 23vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const $Title = styled(motion.h1)`
  font-family: "GothamBlack";
  color: #fff;
  font-size: 12vw;
  text-transform: uppercase;
  margin-bottom: 10vw;
`;

export const $Solutions = styled.ul`
  margin-top: 12vw;
  display: flex;
  flex-direction: column;
  gap: 20vw;
`;