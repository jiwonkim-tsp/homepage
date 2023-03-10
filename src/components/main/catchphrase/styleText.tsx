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

export const $Wrapper = styled.div`
  font-size: 8vw;
  font-weight: bold;
  @media screen and (max-width: 600px) {
    font-size: 40px;
  }
`;

export const $Letter = styled.span<{ delay: number }>`
  display: inline-block;
  color: #fff;
  animation: ${waviy} 1s;
  animation-delay: calc(0.1s * ${({ delay }) => delay});
`;
