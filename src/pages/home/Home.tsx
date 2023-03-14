import Catchphrase from "./../../components/main/catchphrase/Catchphrase";
import OurTeam from "./../../components/main/ourTeam/OurTeam";
import OurProjects from "./../../components/main/ourProjects/OurProjects";
import OurSolution from "./../../components/main/ourSolution/OurSolution";
import News from "./../../components/main/news/News";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <Catchphrase />
      <OurTeam />
      <OurSolution />
      <OurProjects />
      <News />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  height: 100%;
  position: relative;
`;
