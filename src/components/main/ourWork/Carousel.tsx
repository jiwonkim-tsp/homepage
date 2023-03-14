import { $Wrapper, $CarouselWrapper, $Item } from "./styleCarousel";
import { Link } from "react-router-dom";
import { ourWorkData } from "./../../../data/ourWorkData";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/autoplay";

// Import Swiper styles
import "swiper/css";

const Carousel = () => {
  return (
    <$Wrapper>
      <$CarouselWrapper
        modules={[Autoplay]}
        slidesPerView={3.5}
        // spaceBetween={30}
        // centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        speed={5000}
        // navigation={true}
      >
        {ourWorkData.map((list) => (
          <SwiperSlide key={list.id}>
            <img src={list.src} alt={list.src} />
          </SwiperSlide>
        ))}
      </$CarouselWrapper>
    </$Wrapper>
  );
};

export default Carousel;
