import { useState, useEffect, useRef } from "react";
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
import { AnimatePresence, useAnimationControls } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 5,
      ease: "linear",
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const Work = () => {
  const controls = useAnimationControls();
  const [dataNum, setDataNum] = useState(4);
  const slicedData = ourWorkData.slice(0, dataNum);

  const handleClick = () => {
    setDataNum((prev) => prev + 4);
  };

  useEffect(() => {
    console.log("뭐가문제지");
    controls.start("visible");
    console.log(dataNum);
  }, [dataNum]);

  return (
    <$Wrapper>
      <$Title>our works</$Title>
      <AnimatePresence>
        <$Works variants={container} initial="hidden" animate={controls}>
          {slicedData.map((list) => (
            <WorkList
              key={list.id}
              img={list.img}
              tag={list.tag}
              title={list.title}
              location={list.location}
              period={list.period}
              link={list.link}
            />
          ))}
        </$Works>
      </AnimatePresence>
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
