import styled from "styled-components";
import colors from "./../../../constants/color";

export const $Wrapper = styled.div<{ solution: boolean }>`
  position: absolute;
  top: 90%;
  right: 50%;
`;

export const $Heading = styled.h1`
  font-size: 3vw;
  font-weight: bold;
  margin: 25px 0;
  color: ${colors["pink"]};
  text-transform: uppercase;
`;

export const $Content = styled.div`
  font-size: 2.5vw;
  line-height: 1.25;
`;

export const $Sentence = styled.p`
  color: #fff;
`;
export const $ColoredText = styled.span<{ color: string }>`
  color: ${({ color }) => colors[color]};
`;
