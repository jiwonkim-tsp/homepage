import { $Wrapper, $Letter } from "./styleText";

interface ITextProps {
  phrase: { id: number; text: string };
}

const AnimatedText = ({ phrase }: ITextProps) => {
  const sentences = phrase.text.split("");
  return (
    <$Wrapper>
      {sentences.map((item, index) => (
        <$Letter key={index}>{item}</$Letter>
      ))}
    </$Wrapper>
  );
};

export default AnimatedText;
