import styled from "styled-components";
import { useCarouselScroll } from "./../hooks/useCarouselScroll";

const colors = [
  { id: 1, bg: "pink", rotate: "0deg" },
  { id: 2, bg: "red", rotate: "-32deg" },
  { id: 3, bg: "blue", rotate: "-98deg" },
  { id: 4, bg: "orange", rotate: "-130deg" },
  { id: 5, bg: "pink", rotate: "-163deg" },
  { id: 6, bg: "red", rotate: "-196deg" },
  { id: 7, bg: "blue", rotate: "-229deg" },
  { id: 8, bg: "orange", rotate: "-261deg" },
  { id: 9, bg: "blue", rotate: "-294deg" },
  { id: 10, bg: "orange", rotate: "-327deg" },
  { id: 11, bg: "pink", rotate: "0deg" },
  { id: 12, bg: "red", rotate: "-32deg" },
  { id: 13, bg: "blue", rotate: "-98deg" },
];

const ScrollSlider = () => {
  const carouselRef = useCarouselScroll();

  return (
    <$Wrapper>
      <$Carousel ref={carouselRef}>
        {colors.map((color) => (
          <$CarouselItem key={color.id} color={color.bg} rotate={color.rotate}>
            {color.id}
          </$CarouselItem>
        ))}
      </$Carousel>
    </$Wrapper>
  );
};

export default ScrollSlider;

const $Wrapper = styled.div`
  background-color: beige;
  width: 1100px;
  height: 400px;
  display: flex;
  align-items: center;
  transform: translateZ(685px) rotateZ(6deg);
`;

const $Carousel = styled.div`
  display: flex;
  height: 300px;
  background-color: beige;
  overflow-x: scroll;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const $CarouselItem = styled.div<{ color: string; rotate: string }>`
  flex-grow: 0;
  flex-shrink: 0;
  width: 300px;
  height: 300px;
  background-color: ${({ color }) => color};
  /* transform: rotateY(${({ rotate }) => rotate}) translateZ(686px); */
`;
