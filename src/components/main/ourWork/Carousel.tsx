import { $Wrapper, $CarouselWrapper, $Item } from "./styleCarousel";
import { Link } from "react-router-dom";
import { ourWorkData } from "./../../../data/ourWorkData";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <$Wrapper>
      <$CarouselWrapper {...settings}>
        {ourWorkData.map((list) => (
          <div key={list.id}>
            안녕
            {/* <img src={list.src} alt={list.src} /> */}
          </div>
        ))}
      </$CarouselWrapper>
    </$Wrapper>
  );
};

export default Carousel;
