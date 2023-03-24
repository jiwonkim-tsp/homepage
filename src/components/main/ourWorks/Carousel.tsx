import { $Wrapper, $CarouselWrapper, $Item } from "./styleCarousel";
import { ourWorkData } from "@Data/ourWorkData";
//slick css
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
        {ourWorkData.map((list) => (
          <$Item key={list.id}>
            <img src={list.img} alt={list.title} />
          </$Item>
        ))}
      </$CarouselWrapper>
    </$Wrapper>
  );
};

export default Carousel;
