import Carousel from "./Carousel";
import { $Wrapper } from "./style";
import Button from "@Components/Button/Button";
import { useNavigate } from "react-router-dom";

const OurWork = () => {
  const navigate = useNavigate();

  return (
    <$Wrapper>
      <Carousel />
      <Button
        text={"Discover more of our work"}
        color={"#fff"}
        bgColor={"purple"}
        handleClick={() => navigate("/work")}
      />
    </$Wrapper>
  );
};

export default OurWork;
