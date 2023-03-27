import Catchphrase from "@Components/main/catchphrase/Catchphrase";
import OurTeam from "@Components/main/ourTeam/OurTeam";
import OurProducts from "@Components/main/ourProducts/OurProducts";
import OurSolutions from "@Components/main/ourSolutions/OurSolutions";
import News from "@Components/main/news/News";
import Clients from "@Components/main/clients/Clients";
import Awards from "@Components/main/awards/Awards";
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
    }, 4000);
  }, []);

  return (
    <Wrapper>
      {loading ? <Loading /> : ""}
      <Catchphrase />
      <OurTeam />
      <OurSolutions />
      <OurProducts />
      <Clients />
      <Awards />
      <News />
      <Footer page="main" />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  height: 100%;
  position: relative;
`;
