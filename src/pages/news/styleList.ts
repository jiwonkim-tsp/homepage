import styled from "styled-components";
import { motion } from "framer-motion";
import colors from "./../../constants/color";

export const $List = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1.7vw;
  margin-bottom: 6vw;
  &:nth-child(2n) {
    margin-top: 4vw;
  }
  cursor: pointer;
`;

// export const $ListBox = styled.div`
//   padding: 0.5vw;
//   display: flex;
//   flex-direction: column;
//   gap: 2vw;
// `;

export const $Press = styled.div`
  color: ${colors["pink"]};
  font-size: 1.15vw;
  font-weight: bold;
`;

export const $Title = styled.div`
  color: ${colors["yellow"]};
  font-family: "NanumSquareBold";
  word-break: keep-all;
  font-size: 2.2vw;
  line-height: 1.2;
`;

export const $Content = styled.div`
  color: #fff;
  line-height: 1.2;
  font-size: 1.6vw;
`;

// export const $MoreBtn = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transform: translateX(12vw);
//   font-size: 1.1vw;
//   color: #fff;
//   text-decoration: none;
//   cursor: pointer;
// `;
