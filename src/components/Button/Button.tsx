import styled from "styled-components";
import colors from "./../../constants/color";

interface IBtnProps {
  text: string;
  color: string;
  bgColor: string;
}

const Button = ({ text, color, bgColor }: IBtnProps) => {
  return (
    <$Button bgColor={bgColor} color={color}>
      {text}
    </$Button>
  );
};

export default Button;

const $Button = styled.div<{ bgColor: string; color: string }>`
  padding: 1.5vw 2.8vw;
  color: ${({ color }) => (color ? color : "#000")};
  background-color: ${({ bgColor }) => colors[bgColor]};
  border-radius: 2.5vw;
  font-size: 1.5vw;
`;
