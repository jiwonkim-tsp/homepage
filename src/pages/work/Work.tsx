import { useState, useEffect } from "react";
import {
  $Wrapper,
  $Title,
  $Works,
  $BtnWrapper,
  $Content,
  $ContentBtnWrapper,
  $Sentence,
  $Word,
} from "./style";
import { ourWorkData } from "@Data/ourWorkData";
import WorkList from "./WorkList";
import Button from "@Components/Button/Button";
import { useAnimationControls } from "framer-motion";
import { useNavigate } from "react-router-dom";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      duration: 3,
      delayChildren: 1,
      staggerChildren: 0.5,
    },
  },
};

const Work = () => {
  const navigate = useNavigate();
  const [dataNum, setDataNum] = useState(4);
  const slicedData = ourWorkData.slice(0, dataNum);
  const controls = useAnimationControls();

  const handleClick = () => {
    setDataNum((prev) => prev + 4);
  };

  useEffect(() => {
    controls.start("visible");
  }, [dataNum]);

  return (
    <$Wrapper>
      <$Title>our works</$Title>
      <$Works
        variants={container}
        initial="hidden"
        animate={controls}
        onAnimationStart={() => console.log("animation started")}
      >
        {slicedData.map((list, index) => (
          <WorkList
            key={list.id}
            img={list.img}
            tag={list.tag}
            title={list.title}
            location={list.location}
            period={list.period}
            link={list.link}
            delay={index}
          />
        ))}
      </$Works>
      {dataNum < 12 ? (
        <$BtnWrapper>
          <Button
            text={"MORE"}
            color={"#fff"}
            bgColor={"transparent"}
            border={"purple"}
            padding={"1.8vw 5vw"}
            handleClick={handleClick}
          />
        </$BtnWrapper>
      ) : (
        ""
      )}
      <$Content>
        <$ContentBtnWrapper>
          <Button
            text={"Get in touch"}
            color={""}
            bgColor={"green"}
            handleClick={() => navigate("/solutions")}
          />
        </$ContentBtnWrapper>
        <$Sentence>
          <$Word>Let's make</$Word>
          <$Word>something</$Word>
          <$Word>new</$Word>
        </$Sentence>
      </$Content>
    </$Wrapper>
  );
};

export default Work;
