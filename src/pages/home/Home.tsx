import Catchphrase from "@Components/main/catchphrase/Catchphrase";
import OurTeam from "@Components/main/ourTeam/OurTeam";
import OurProjects from "@Components/main/ourProjects/OurProjects";
import OurSolution from "@Components/main/ourSolution/OurSolution";
import News from "@Components/main/news/News";
import Footer from "@Components/footer/Footer";
import styled from "styled-components";
import Loading from "@Components/main/Loading/Loading";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [loading, setLoading] = useState(true);
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
      <OurProjects />
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
