import styled from "styled-components";
import colors from "@Constants/color";

export const $List = styled.li`
  width: 35vw;
  @media (max-width: 480px) {
    width: 60vw;
  }
`;

export const $Wrapper = styled.div`
  width: 28vw;
  display: flex;
  flex-direction: column;
  gap: 1.5vw;
  @media (max-width: 480px) {
    width: 50vw;
  }
`;

export const $Press = styled.div`
  font-size: 1.1vw;
  color: ${colors["green"]};
  font-family: "Gotham", "NanumSquareEB";
  font-weight: bold;
  @media (max-width: 480px) {
    font-size: 3vw;
  }
`;

export const $Title = styled.div`
  word-break: keep-all;
  line-height: 1.15;
  font-family: "NanumSquareEB";
  font-size: 1.5vw;
  color: ${colors["yellow"]};
  @media (max-width: 480px) {
    font-size: 4vw;
  }
`;

export const $Content = styled.div`
  font-family: "NanumSquare";
  color: white;
  word-break: keep-all;
  font-size: 1.2vw;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.2em;
  @media (max-width: 700px) {
    -webkit-line-clamp: 2;
    line-height: 1.5em;
  }
  @media (max-width: 556px) {
    -webkit-line-clamp: 2;
    line-height: 1.7em;
  }
  @media (max-width: 480px) {
    font-size: 3vw;
  }
`;
