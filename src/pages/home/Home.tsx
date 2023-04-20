import Catchphrase from "@Components/main/catchphrase/Catchphrase";
import OurTeam from "@Components/main/ourTeam/OurTeam";
import OurProducts from "@Components/main/ourProducts/OurProducts";
import OurSolutions from "@Components/main/ourSolutions/OurSolutions";
import News from "@Components/main/news/News";
import Clients from "@Components/main/clients/Clients";
import Awards from "@Components/main/awards/Awards";
import styled from "styled-components";
import Loading from "@Components/main/Loading/Loading";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { LoadingState } from "@Recoil/atom";
// import video from "@Assets/image/catchphrase/tsp xr.mp4";
import { useState, useRef } from "react";

const Home = () => {
  const [loading, setLoading] = useRecoilState(LoadingState);
  const [playing, setPlaying] = useState(true);
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  const ref = useRef<HTMLVideoElement>(null);
  // const video = ref && ref.current;

  useEffect(() => {
    let scrollTimeout: any;

    function handleScroll() {
      setIsScroll(true);
      if (ref.current) {
        ref.current.play();
      }

      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        setIsScroll(false);
        if (ref.current) {
          ref.current.pause();
        }
        console.log("Scrolling has stopped");
        // Do something here
      }, 250); // You can adjust the delay time to suit your needs
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <Wrapper>
      {loading ? <Loading /> : ""}
      <Catchphrase />
      <OurTeam />
      <OurSolutions />
      <OurProducts />
      <News />
      <Awards />
      <Clients />
      {/* <$VideoBox>
        <video ref={ref} src={video} width="50%" muted loop playsInline></video>
      </$VideoBox> */}
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  overflow-x: hidden;
  position: relative;
`;

const $VideoBox = styled.div`
  position: fixed;
  bottom: 10vw;
`;
