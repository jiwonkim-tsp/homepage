import AnimatedText from "./AnimatedText";
import styled, { keyframes } from "styled-components";

const Catchphrase = () => {
  const phrases = [
    { id: 1, text: "Begin Your" },
    {
      id: 2,
      text: "AR&XR experience",
    },
  ];
  const height = window.innerHeight;
  console.log(height);

  return (
    <$Wrapper height={height}>
      {phrases.map((phrase, index) => {
        return <AnimatedText phrase={phrase} key={index} />;
      })}
    </$Wrapper>
  );
};

const delay = keyframes`
  
`;

const $Wrapper = styled.div<{ height: number }>`
  /* background-color: pink; */
  height: ${({ height }) => height}px;
  /* height: 500px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  animation: delay;
  animation-delay: 2s;
`;

export default Catchphrase;
