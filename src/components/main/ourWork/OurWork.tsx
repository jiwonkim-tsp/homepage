import Carousel from "./Carousel";
import { $Wrapper } from "./style";
import Button from "./../../Button/Button";
import { useNavigate } from "react-router-dom";

const OurWork = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/work");
  };
  return (
    <$Wrapper>
      <Carousel />
      <Button
        text={"Discover more of our work"}
        color={"#fff"}
        bgColor={"purple"}
        handleClick={handleClick}
      />
    </$Wrapper>
  );
};

export default OurWork;
