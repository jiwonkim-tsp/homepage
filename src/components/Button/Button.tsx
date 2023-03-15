import styled from "styled-components";
import colors from "./../../constants/color";

interface IBtnProps {
  text: string;
  color: string;
  bgColor: string;
  border?: string;
}

const Button = ({ text, color, bgColor, border }: IBtnProps) => {
  return (
    <$Button
      bgColor={bgColor}
      color={color}
      border={typeof border !== "string" ? bgColor : border}
    >
      {text}
    </$Button>
  );
};

export default Button;

const $Button = styled.div<{ bgColor: string; color: string; border: string }>`
  padding: 1vw 2vw;
  color: ${({ color }) => (color ? color : "#000")};
  border: 1px solid ${({ border }) => colors[border]};
  background-color: ${({ bgColor }) => colors[bgColor]};
  border-radius: 2.5vw;
  font-size: 1.5vw;
  position: relative;
  z-index: 1;
`;
