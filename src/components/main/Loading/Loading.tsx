import { $Wrapper } from "./style";
import loading from "@Assets/image/loading/loading.mp4";
import useScroll from "@Hooks/useScroll";

const Loading = () => {
  //스크롤 비활성화
  const { enableScroll } = useScroll();
  enableScroll();

  return (
    <$Wrapper>
      <video autoPlay muted loop playsInline>
        <source src={loading} type="video/mp4" />
      </video>
    </$Wrapper>
  );
};

export default Loading;
