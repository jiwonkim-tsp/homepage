import { $Wrapper } from "./style";
import useScroll from "@Hooks/useScroll";
import loading from "@Assets/image/loading/Intro_apng.png";

const Loading = () => {
  //스크롤 비활성화
  const { enableScroll } = useScroll();
  enableScroll();

  return (
    <$Wrapper>
      <img src={loading} alt="로딩 이미지" />
    </$Wrapper>
  );
};

export default Loading;
