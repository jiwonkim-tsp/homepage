import styled from "styled-components";
import colors from "@Constants/color";

export const $List = styled.li`
  width: 35vw;
`;

export const $Wrapper = styled.div`
  width: 28vw;
  display: flex;
  flex-direction: column;
  gap: 1.5vw;
`;

export const $Press = styled.div`
  font-size: 1.1vw;
  color: ${colors["green"]};
  font-family: "Gotham", "NanumSquareEB";
  font-weight: bold;
`;

export const $Title = styled.div`
  word-break: keep-all;
  line-height: 1.15;
  font-family: "NanumSquareEB";
  font-size: 1.5vw;
  color: ${colors["yellow"]};
`;

export const $Content = styled.div`
  font-family: "NanumSquare";
  word-break: keep-all;
  font-size: 1.2vw;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.2em;
`;
