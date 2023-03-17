import { $Wrapper, $CarouselWrapper, $Item } from "./styleCarousel";
import { ourWorkMainData } from "../../../data/ourWorkData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    arrows: false,
    dots: false,
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
      <$CarouselWrapper {...settings}>
        {ourWorkMainData.map((list) => (
          <$Item key={list.id}>
            <img src={list.src} alt={list.src} />
          </$Item>
        ))}
      </$CarouselWrapper>
    </$Wrapper>
  );
};

export default Carousel;
