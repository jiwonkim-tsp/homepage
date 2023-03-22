import styled from "styled-components";
import colors from "@Constants/color";
import { motion } from "framer-motion";

export const $List = styled(motion.li)<{ delay: number }>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 1.1vw;
  &:nth-child(2n) {
    margin-top: 3vw;
  }
`;

export const $ImgBox = styled.div`
  img {
    width: 30vw;
  }
`;

export const $ContentBox = styled.div`
  padding: 0.5vw;
  display: flex;
  flex-direction: column;
  gap: 1.1vw;
`;

export const $Tag = styled.div`
  font-weight: bold;
  color: ${colors["pink"]};
  font-size: 1.15vw;
`;

export const $Title = styled.div`
  color: ${colors["yellow"]};
  font-family: "NanumSquareBold";
  font-size: 2.4vw;
`;

export const $LocaPerBox = styled.div`
  font-family: "NanumSquare";
  font-size: 1.5vw;
  display: flex;
  flex-direction: column;
  gap: 0.4vw;
  margin-bottom: 7vw;
`;

export const $Location = styled.div`
  color: #fff;
`;

export const $Period = styled.div`
  color: #fff;
`;
