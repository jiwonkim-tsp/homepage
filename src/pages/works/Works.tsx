import { useState } from "react";
import { $Wrapper, $Works, $BtnWrapper } from "./style";
import { ourWorkData } from "@Data/ourWorkData";
import WorkList from "./WorkList";
import Button from "@Components/Button/Button";
import Title from "@Components/title/Title";
import { container } from "@Animation/framerMotion";

function slicedData(n: number) {
  const length = 4;
  const startNum = length * n;
  const endNum = startNum + length;
  return ourWorkData.slice(startNum, endNum);
}

const Works = () => {
  const [pageNum, setPageNum] = useState(1);
  const [dataPages, setDataPages] = useState([slicedData(0)]);

  const handleClick = () => {
    setDataPages((prev) => [...prev, slicedData(pageNum)]);
    setPageNum((prev) => prev + 1);
  };

  return (
    <$Wrapper>
      <Title title="works" />
      {dataPages.map((slicedData, index) => (
        <$Works
          key={index}
          variants={container}
          initial="hidden"
          animate="visible"
        >
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
      ))}
      {pageNum !== 3 && (
        <$BtnWrapper>
          <Button
            text={"더보기"}
            color={"#fff"}
            bgColor={"transparent"}
            border={"purple"}
            padding={"1.8vw 5vw"}
            handleClick={handleClick}
          />
        </$BtnWrapper>
      )}
    </$Wrapper>
  );
};

export default Works;
