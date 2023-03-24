import {
  $Wrapper,
  $PositionWrapper,
  $Title,
  $SliderWrapper,
  $Slider,
  $BtnWrapper,
} from "./style";
import { newsData } from "@Data/newsData";
import Button from "@Components/Button/Button";
import NewsList from "./NewsList";
import { useNavigate } from "react-router-dom";

const News = () => {
  const navigate = useNavigate();

  return (
    <$Wrapper>
      <$PositionWrapper>
        <$Title>소식들</$Title>
        <$SliderWrapper>
          <$Slider>
            {newsData.map((item: any) => (
              <NewsList
                key={item.id}
                title={item.title}
                content={item.content}
                press={item.press}
              />
            ))}
          </$Slider>
        </$SliderWrapper>
        <$BtnWrapper>
          <Button
            text={"더보기"}
            color={"#fff"}
            bgColor={"purple"}
            handleClick={() => navigate("/news")}
          />
        </$BtnWrapper>
      </$PositionWrapper>
    </$Wrapper>
  );
};

export default News;
