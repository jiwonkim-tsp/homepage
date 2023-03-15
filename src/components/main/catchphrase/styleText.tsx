import styled, { keyframes } from "styled-components";

const waviy = keyframes`
  0%,
  40%,
  100% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(-20px);
  }
`;

export const $Wrapper = styled.div``;

export const $Letter = styled.span<{ delay: number }>`
  font-family: "GothamBlack";
  font-size: 11vw;
  display: inline-block;
  color: #fff;
  animation: ${waviy} 1s;
  animation-delay: calc(0.1s * ${({ delay }) => delay});
`;
