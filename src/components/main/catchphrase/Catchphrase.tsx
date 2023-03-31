import AnimatedText from "./AnimatedText";
import { $Wrapper, $VideoWrapper, $Phrases } from "./styleCatchphrase";
import video from "@Assets/image/catchphrase/TSP XR.mp4";

const Catchphrase = () => {
  const phrases = [
    { id: 1, text: "Discover" },
    { id: 2, text: "new dimensions" },
    {
      id: 3,
      text: "and possibilities",
    },
    {
      id: 4,
      text: "with our AR solutions",
    },
  ];

  return (
    <$Wrapper>
      <$VideoWrapper>
        <video width="100%" autoPlay muted loop playsInline>
          <source src={video} type="video/mp4"></source>
        </video>
      </$VideoWrapper>
      <$Phrases>
        {phrases.map((phrase, index) => {
          return <AnimatedText phrase={phrase} key={index} />;
        })}
      </$Phrases>
    </$Wrapper>
  );
};

export default Catchphrase;
