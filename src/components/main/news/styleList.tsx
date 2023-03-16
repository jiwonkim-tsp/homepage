import styled from "styled-components";
import colors from "./../../../constants/color";

export const $List = styled.li`
  width: 25vw;
  display: flex;
  gap: 2vw;
  flex-direction: column;
  font-family: "NanumSquare";
`;

export const $Title = styled.div`
  font-size: 1.5vw;
  color: ${colors["green"]};
`;

export const $Content = styled.div`
  word-break: keep-all;
  font-size: 2.5vw;
  line-height: 1.2;
  height: 15vw;
  overflow: hidden;
`;
