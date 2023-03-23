import Catchphrase from "@Components/main/catchphrase/Catchphrase";
import OurTeam from "@Components/main/ourTeam/OurTeam";
import OurProducts from "@Components/main/ourProducts/OurProducts";
import OurSolution from "@Components/main/ourSolution/OurSolution";
import News from "@Components/main/news/News";
import Footer from "@Components/footer/Footer";
import styled from "styled-components";
import Loading from "@Components/main/Loading/Loading";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { LoadingState } from "@Recoil/atom";

const Home = () => {
  const [loading, setLoading] = useRecoilState(LoadingState);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Wrapper>
      {loading ? <Loading /> : ""}
      <Catchphrase />
      <OurTeam />
      <OurSolution />
      <OurProducts />
      <News />
      <Footer main={true} />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  height: 100%;
  position: relative;
`;
