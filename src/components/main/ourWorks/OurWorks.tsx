import Carousel from "./Carousel";
import { $Wrapper } from "./style";
import Button from "@Components/Button/Button";
import { useNavigate } from "react-router-dom";

const OurWorks = () => {
  const navigate = useNavigate();

  return (
    <$Wrapper>
      <Carousel />
      {/* <Button
        text={"더보기"}
        color={"#fff"}
        bgColor={"purple"}
        handleClick={() => navigate("/works")}
      /> */}
    </$Wrapper>
  );
};

export default OurWorks;
