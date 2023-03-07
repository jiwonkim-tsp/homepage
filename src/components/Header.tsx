import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <Logo />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  width: 100%;
`;

const Logo = styled.div`
  width: 100%;
`;
