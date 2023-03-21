import AnimatedText from "./AnimatedText";
import {
  $Wrapper,
  $VideoWrapper,
  $Phrases,
  $BtnWrapper,
} from "./styleCatchphrase";
import Button from "@Components/Button/Button";
import video from "@Assets/image/catchphrase/TSP XR.mp4";
import { useNavigate } from "react-router-dom";

const Catchphrase = () => {
  const navigate = useNavigate();

  const phrases = [
    { id: 1, text: "Begin your" },
    {
      id: 2,
      text: "new",
    },
    {
      id: 2,
      text: "experience",
    },
  ];

  const handleClick = () => {
    navigate("/work");
  };

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
      <$BtnWrapper>
        <Button
          text={"Discover what we do"}
          color={""}
          bgColor={"yellow"}
          handleClick={handleClick}
        />
      </$BtnWrapper>
    </$Wrapper>
  );
};

export default Catchphrase;
