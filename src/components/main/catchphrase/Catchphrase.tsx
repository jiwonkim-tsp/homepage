import AnimatedText from "./AnimatedText";
import { $Wrapper, $Phrases } from "./styleCatchphrase";
import Button from "./../../Button/Button";

const Catchphrase = () => {
  const phrases = [
    { id: 1, text: "Begin Your" },
    {
      id: 2,
      text: "new",
    },
    {
      id: 2,
      text: "experience",
    },
  ];

  return (
    <$Wrapper>
      <$Phrases>
        {phrases.map((phrase, index) => {
          return <AnimatedText phrase={phrase} key={index} />;
        })}
      </$Phrases>
      <Button text={"Discover what we do"} color={""} bgColor={"yellow"} />
    </$Wrapper>
  );
};

export default Catchphrase;
