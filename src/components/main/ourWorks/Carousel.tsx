import { $Wrapper, $CarouselWrapper, $Item } from "./styleCarousel";
import { carouselData } from "@Data/ourWorkData";

const Carousel = () => {
  return (
    <$Wrapper>
      <$CarouselWrapper>
        {carouselData.map((list) => (
          <$Item key={list.id}>
            <img src={list.img} alt={list.title} />
          </$Item>
        ))}
      </$CarouselWrapper>
    </$Wrapper>
  );
};

export default Carousel;
