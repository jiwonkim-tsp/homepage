import styled from "styled-components";
import colors from "@Constants/color";

export const $Content = styled.div<{ main: boolean }>`
  font-family: "NanumSquare";
  font-size: ${({ main }) => (main ? "1.9vw" : "2.5vw")};
  line-height: 1.25;
  @media (max-width: 480px) {
    font-size: ${({ main }) => (main ? "4vw" : "2.5vw")};
  }
`;

export const $Sentence = styled.span`
  color: #fff;
`;
export const $ColoredText = styled.span<{ color: string }>`
  color: ${({ color }) => colors[color]};
  word-break: keep-all;
  font-family: ${({ color }) =>
    color !== "white" ? "NanumSquareEB" : "NanumSquare"};
`;
