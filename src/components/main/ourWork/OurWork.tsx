import Carousel from "./Carousel";
import { $Wrapper } from "./style";
import Button from "./../../Button/Button";

const OurWork = () => {
  return (
    <$Wrapper>
      <Carousel />
      <Button
        text={"Discover more of our work"}
        color={"#fff"}
        bgColor={"purple"}
      />
    </$Wrapper>
  );
};

export default OurWork;
