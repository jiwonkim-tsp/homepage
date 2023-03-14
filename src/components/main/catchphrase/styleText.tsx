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
  @media screen and (max-width: 600px) {
    font-size: 40px;
  }
`;

export const $Letter = styled.span<{ delay: number }>`
  font-size: 11vw;
  font-weight: bold;
  display: inline-block;
  color: #fff;
  animation: ${waviy} 1s;
  animation-delay: calc(0.1s * ${({ delay }) => delay});
`;
