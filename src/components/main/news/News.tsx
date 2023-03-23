import {
  $Wrapper,
  $PositionWrapper,
  $Title,
  $Slider,
  $BtnWrapper,
} from "./style";
import { newsData } from "@Data/newsData";
import Button from "@Components/Button/Button";
import NewsList from "./NewsList";
import { useNavigate } from "react-router-dom";
//slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const News = () => {
  const navigate = useNavigate();

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 9000,
    autoplaySpeed: 0,
    cssEase: "linear",
  };
  return (
    <$Wrapper>
      <$PositionWrapper>
        <$Title>news</$Title>
        <$Slider {...settings}>
          {newsData.map((item: any) => (
            <NewsList
              key={item.id}
              title={item.title}
              content={item.content}
              press={item.press}
            />
          ))}
        </$Slider>
        <$BtnWrapper>
          <Button
            text={"Discover more of our work"}
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
