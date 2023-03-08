import { $Wrapper, $CarouselWrapper, $Item } from "./styleCarousel";
import loading from "./../../../assets/image/loading/loading.png";

const items = [
  { id: 1, bg: "red" },
  { id: 2, bg: "orange" },
  { id: 3, bg: "yellow" },
  { id: 4, bg: "green" },
  { id: 5, bg: "blue" },
  { id: 6, bg: "navy" },
  { id: 7, bg: "purple" },
  { id: 8, bg: "black" },
  { id: 9, bg: "blue" },
  { id: 10, bg: "black" },
  { id: 1, bg: "red" },
  { id: 2, bg: "orange" },
  { id: 3, bg: "yellow" },
  { id: 4, bg: "green" },
  { id: 5, bg: "blue" },
  { id: 6, bg: "navy" },
  { id: 7, bg: "purple" },
  { id: 8, bg: "black" },
  { id: 9, bg: "blue" },
  { id: 10, bg: "black" },
];
const Carousel = () => {
  return (
    <$Wrapper>
      <$CarouselWrapper>
        {items.map((item) => (
          <$Item key={item.id} bg={item.bg}>
            {item.bg}
          </$Item>
        ))}
      </$CarouselWrapper>
    </$Wrapper>
  );
};

export default Carousel;
