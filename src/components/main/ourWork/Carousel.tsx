import { $Wrapper, $CarouselWrapper, $Item } from "./styleCarousel";
import { Link } from "react-router-dom";
import { ourWorkData } from "./../../../data/ourWorkData";

const Carousel = () => {
  return (
    <$Wrapper>
      <$CarouselWrapper>
        {ourWorkData.map((list) => (
          <$Item key={list.id}>
            <Link to={list.link}>
              <img src={list.src} alt={list.src} />
            </Link>
          </$Item>
        ))}
      </$CarouselWrapper>
    </$Wrapper>
  );
};

export default Carousel;
