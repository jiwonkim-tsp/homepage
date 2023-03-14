import Catchphrase from "./../../components/main/catchphrase/Catchphrase";
import OurTeam from "./../../components/main/ourTeam/OurTeam";
import OurWork from "./../../components/main/ourWork/OurWork";
import OurSolution from "./../../components/main/ourSolution/OurSolution";
import News from "./../../components/main/news/News";
import styled from "styled-components";
import { useScroll } from "framer-motion";
import { useState } from "react";

const Home = () => {
  return (
    <Wrapper>
      <Catchphrase />
      <OurTeam />
      <OurSolution />
      <News />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  height: 100%;
  position: relative;
`;
