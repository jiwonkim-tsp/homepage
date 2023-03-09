import styled, { keyframes } from "styled-components";

interface ITextProps {
  phrase: { id: number; text: string };
}

const AnimatedText = ({ phrase }: ITextProps) => {
  console.log(phrase);
  const sentences = phrase.text.split("");
  return (
    <$Wrapper>
      {sentences.map((item, index) => (
        <$Letter key={index} delay={index}>
          {item}
        </$Letter>
      ))}
    </$Wrapper>
  );
};

export default AnimatedText;

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

const $Wrapper = styled.div`
  font-size: 60px;
  font-weight: bold;
`;

const $Letter = styled.span<{ delay: number }>`
  display: inline-block;
  color: #fff;
  animation: ${waviy} 1s;
  animation-delay: calc(0.1s * ${({ delay }) => delay});
`;
