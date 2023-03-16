import {
  $Wrapper,
  $PositionWrapper,
  $Title,
  $Slider,
  $BtnWrapper,
} from "./style";
import { ourSolutionMainData } from "./../../../data/ourAiSolutionsdata";
import Button from "./../../Button/Button";
import NewsList from "./NewsList";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const News = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // cssEase: "linear",
  };
  return (
    <$Wrapper>
      <$PositionWrapper>
        <$Title>news</$Title>
        <$Slider {...settings}>
          {ourSolutionMainData.map((item: any) => (
            <NewsList key={item.id} title={item.title} content={item.content} />
          ))}
        </$Slider>
        <$BtnWrapper>
          <Button
            text={"Discover more of our work"}
            color={"#fff"}
            bgColor={"purple"}
          />
        </$BtnWrapper>
      </$PositionWrapper>
    </$Wrapper>
  );
};

export default News;
