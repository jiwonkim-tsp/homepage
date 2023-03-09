import styled from "styled-components";

const OurTeam = () => {
  return (
    <$Wrapper>
      {/* <$Rounded /> */}
      <$ContentWrapper>
        <$Heading>Our Team is</$Heading>
        <$Content>
          Make Your AR & XR Experiences TSP XR is a startup that researchers and
          developers solution that can implement various spatial information
          data on an urban and architectural scale through Augmented Reality
        </$Content>
      </$ContentWrapper>
    </$Wrapper>
  );
};

export default OurTeam;

const height = window.innerHeight;
const $Wrapper = styled.div`
  position: relative;
  background-color: #f1c6db;
  height: ${height}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: -100px;
    width: 100%;
    height: 200px;
    border-radius: 50%;
    background-color: #f1c6db;
  }
`;

const $ContentWrapper = styled.div`
  padding: 200px;
  font-weight: bold;
  color: #0a3ed1;
  z-index: 1;
`;

const $Heading = styled.h1`
  font-size: 60px;
  margin-top: 20px;
  margin-bottom: 50px;
`;

const $Content = styled.p`
  font-size: 60px;
`;
