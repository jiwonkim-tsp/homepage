import styled from "styled-components";
import colors from "@Constants/color";

interface IBtnProps {
  text: string;
  color: string;
  bgColor: string;
  border?: string;
  padding?: string;
  handleClick: () => void;
}

const Button = ({
  text,
  color,
  bgColor,
  border,
  padding,
  handleClick,
}: IBtnProps) => {
  return (
    <$Button
      bgColor={bgColor}
      color={color}
      border={typeof border !== "string" ? bgColor : border}
      padding={typeof padding !== "string" ? "1vw 2vw" : padding}
      onClick={handleClick}
    >
      {text}
    </$Button>
  );
};

export default Button;

const $Button = styled.button<{
  bgColor: string;
  color: string;
  border: string;
  padding: string;
}>`
  padding: ${({ padding }) => (padding ? padding : "1vw 2vw")};
  color: ${({ color }) => (color ? color : "#000")};
  border: 1px solid ${({ border }) => colors[border]};
  background-color: ${({ bgColor }) => colors[bgColor]};
  border-radius: 2.5vw;
  font-size: 1.5vw;
  z-index: 1;
  cursor: pointer;
`;
