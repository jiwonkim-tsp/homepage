import styled from "styled-components";
import colors from "@Constants/color";

export const $Content = styled.div`
  font-family: "NanumSquare";
  font-size: 2.7vw;
  line-height: 1.25;
`;

export const $Sentence = styled.span`
  color: #fff;
`;
export const $ColoredText = styled.span<{ color: string }>`
  color: ${({ color }) => colors[color]};
  word-break: keep-all;
  font-weight: ${({ color }) => (color !== "white" ? "bold" : "normal")};
`;
