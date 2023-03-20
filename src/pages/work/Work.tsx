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
import { ourWorkData } from "./../../data/ourWorkData";
import WorkList from "./WorkList";
import Button from "./../../components/Button/Button";
import { useAnimation, useAnimationControls } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 5,
      ease: "linear",
      type: "spring",
      damping: 300,
      delayChildren: 0.5,
      staggerChildren: 0.8,
    },
  },
};

const Work = () => {
  const [dataNum, setDataNum] = useState(4);
  const slicedData = ourWorkData.slice(0, dataNum);
  const handleClick = () => {
    setDataNum((prev) => prev + 4);
  };

  return (
    <$Wrapper>
      <$Title>our works</$Title>
      <$Works variants={container} initial="hidden" animate="visible">
        {slicedData.map((list) => (
          <WorkList
            key={list.id}
            img={list.img}
            tag={list.tag}
            title={list.title}
            location={list.location}
            period={list.period}
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
            handleClick={handleClick}
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
