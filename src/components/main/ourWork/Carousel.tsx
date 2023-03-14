import { $Wrapper, $CarouselWrapper, $Item } from "./styleCarousel";
import { ourWorkData } from "../../../data/ourWorkData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3.5,
    slidesToScroll: 1.5,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
  };
  return (
    <$Wrapper>
      <$CarouselWrapper {...settings}>
        {ourWorkData.map((list) => (
          <$Item key={list.id}>
            {list.id}
            <img src={list.src} alt={list.src} />
          </$Item>
        ))}
      </$CarouselWrapper>
    </$Wrapper>
  );
};

export default Carousel;
