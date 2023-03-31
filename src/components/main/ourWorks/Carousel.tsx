import { $Wrapper, $CarouselWrapper, $Item } from "./styleCarousel";
import { carouselData } from "@Data/ourWorkData";

const Carousel = () => {
  return (
    <$Wrapper>
      <$CarouselWrapper>
        {carouselData.map((list) => (
          <$Item key={list.id}>
            <a href={list.link && list.link} target="_blank">
              <img src={list.img} alt={list.title} />
            </a>
          </$Item>
        ))}
      </$CarouselWrapper>
    </$Wrapper>
  );
};

export default Carousel;
