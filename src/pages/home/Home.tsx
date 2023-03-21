import Catchphrase from "./../../components/main/catchphrase/Catchphrase";
import OurTeam from "./../../components/main/ourTeam/OurTeam";
import OurProjects from "./../../components/main/ourProjects/OurProjects";
import OurSolution from "./../../components/main/ourSolution/OurSolution";
import News from "./../../components/main/news/News";
import Footer from "./../../components/footer/Footer";
import styled from "styled-components";
import Loading from "./../../components/main/Loading/Loading";
import { useState, useEffect } from "react";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Wrapper>
      {loading ? <Loading /> : ""}/
      <Catchphrase />
      <OurTeam />
      <OurSolution />
      <OurProjects />
      <News />
      <Footer />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  height: 100%;
  position: relative;
`;
