import AnimatedText from "./AnimatedText";
import { $Wrapper, $Phrases } from "./styleCatchphrase";

const Catchphrase = () => {
  const phrases = [
    { id: 1, text: "Begin Your" },
    {
      id: 2,
      text: "AR&XR experience",
    },
  ];

  return (
    <$Wrapper>
      <$Phrases>
        {phrases.map((phrase, index) => {
          return <AnimatedText phrase={phrase} key={index} />;
        })}
      </$Phrases>
    </$Wrapper>
  );
};

export default Catchphrase;
