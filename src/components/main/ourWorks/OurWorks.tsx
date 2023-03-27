import Carousel from "./Carousel";
import { $Wrapper } from "./style";
import { useNavigate } from "react-router-dom";

const OurWorks = () => {
  const navigate = useNavigate();

  return (
    <$Wrapper>
      <Carousel />
    </$Wrapper>
  );
};

export default OurWorks;
