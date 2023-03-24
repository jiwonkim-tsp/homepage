import { useState, useEffect } from "react";
import { $Wrapper, $Title, $Works, $BtnWrapper } from "./style";
import { ourWorkData } from "@Data/ourWorkData";
import WorkList from "./WorkList";
import Button from "@Components/Button/Button";
import { useAnimationControls } from "framer-motion";
import Footer from "@Components/footer/Footer";
import Title from "@Components/title/Title";
import { container } from "@Components/animation/framerMotion";

const Works = () => {
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
      <Title title="our works" />
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
      <Footer page="works" />
    </$Wrapper>
  );
};

export default Works;
