import styled from "styled-components";
import colors from "@Constants/color";
import { motion } from "framer-motion";

export const $List = styled(motion.li)`
  width: 30vw;
  display: flex;
  flex-direction: column;
  gap: 1.1vw;
  &:nth-child(2n) {
    margin-top: 3vw;
  }
  a {
    text-decoration: none;
  }
  @media (max-width: 480px) {
    width: 68vw;
    &:nth-child(2n) {
      margin-top: 0vw;
    }
  }
`;

export const $ImgBox = styled.div`
  img {
    width: 30vw;
  }
  @media (max-width: 480px) {
    img {
      width: 68vw;
    }
  }
`;

export const $ContentBox = styled.div`
  margin-top: 2vw;
  padding-left: 1vw;
  display: flex;
  flex-direction: column;
  gap: 1.1vw;
  @media (max-width: 480px) {
    gap: 1.5vw;
    box-sizing: border-box;
    padding-left: 3vw;
    margin-top: 3vw;
  }
`;

export const $Tag = styled.div`
  font-weight: bold;
  color: ${colors["pink"]};
  font-size: 1.15vw;
  @media (max-width: 480px) {
    font-size: 2.5vw;
  }
`;

export const $Title = styled.div`
  color: ${colors["yellow"]};
  font-family: "NanumSquareEB";
  font-size: 2.4vw;
  word-break: keep-all;
  line-height: 1.1;
  @media (max-width: 480px) {
    font-size: 4.5vw;
  }
`;

export const $LocaPerBox = styled.div`
  font-family: "NanumSquare";
  font-weight: bold;
  font-size: 1.5vw;
  display: flex;
  flex-direction: column;
  gap: 0.4vw;
  @media (max-width: 480px) {
    font-size: 3.2vw;
  }
`;

export const $Location = styled.div`
  color: #fff;
`;

export const $Period = styled.div`
  color: #fff;
`;
