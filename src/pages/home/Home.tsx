import Catchphrase from "./../../components/main/catchphrase/Catchphrase";
import OurTeam from "./../../components/main/ourTeam/OurTeam";
import OurWork from "./../../components/main/ourWork/OurWork";
import OurSolution from "./../../components/main/ourSolution/OurSolution";
import News from "./../../components/main/news/News";
import { useRef, useEffect } from "react";
import styled from "styled-components";

const Home = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <Wrapper ref={wrapperRef}>
      <Catchphrase />
      <OurTeam />
      <OurWork />
      <OurSolution />
      <News />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  height: 100%;
`;
