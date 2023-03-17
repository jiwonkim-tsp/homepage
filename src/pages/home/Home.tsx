import Catchphrase from "./../../components/main/catchphrase/Catchphrase";
import OurTeam from "./../../components/main/ourTeam/OurTeam";
import OurProjects from "./../../components/main/ourProjects/OurProjects";
import OurSolution from "./../../components/main/ourSolution/OurSolution";
import News from "./../../components/main/news/News";
import Footer from "./../../components/footer/Footer";
import styled from "styled-components";
import Loading from "./../../components/main/Loading/Loading";

const Home = () => {
  return (
    <Wrapper>
      <Loading />
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
