import { $Wrapper } from "./style";
import loading from "@Assets/image/loading/loading.mp4";

const Loading = () => {
  return (
    <$Wrapper>
      <video autoPlay muted loop playsInline>
        <source src={loading} type="video/mp4" />
      </video>
    </$Wrapper>
  );
};

export default Loading;
