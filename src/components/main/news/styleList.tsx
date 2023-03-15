import styled from "styled-components";
import colors from "./../../../constants/color";

export const $List = styled.li`
  display: flex;
  gap: 20px;
  flex-direction: column;
  font-family: "NanumSquare";
`;

export const $Title = styled.div`
  color: ${colors["green"]};
`;

export const $Content = styled.div`
  word-break: keep-all;
  font-size: 2.5vw;
  line-height: 1.2;
`;
