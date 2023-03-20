import img from "./../../assets/image/company/pose6.png";
import img2 from "./../../assets/image/company/pose7.png";
import logo from "./../../assets/image/logo/KR_문자형_화이트.png";
import {
  $Wrapper,
  $ImgBox,
  $ImgBox2,
  $LogoBox,
  $ContentWrapper,
  $Content,
  $Sentence,
  $ColoredWord,
  $Year,
} from "./style";

const Company = () => {
  return (
    <$Wrapper>
      <$ImgBox
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 3, ease: "easeOut" }}
      >
        <img src={img} alt="오리너구리 이미지" />
      </$ImgBox>
      <$LogoBox>
        <img src={logo} alt="로고 이미지" />
      </$LogoBox>
      <$ContentWrapper>
        <$Content>
          <$Sentence>
            <$ColoredWord color={"yellow"}>
              웹 기반의 증강현실 솔루션
            </$ColoredWord>
            들을 개발하고, 이에 적합한
            <$ColoredWord color={"yellow"}>콘텐츠</$ColoredWord>를 제작하는
            회사입니다.
          </$Sentence>
          <$Sentence>
            다양한 증강현실 솔루션들을 기반으로{" "}
            <$ColoredWord color={"green"}>웹 기반 증강현실 플랫폼</$ColoredWord>
            을 개발 중입니다.
          </$Sentence>
        </$Content>
        <$Content>
          <$Year>2021</$Year>
          <$Sentence>
            과기부,{" "}
            <$ColoredWord color={"purple"}>
              ICT융합서비스 경쟁력 강화사업
            </$ColoredWord>
          </$Sentence>
          <$Sentence>
            인터넷진흥원
            <$ColoredWord color={"green"}>
              {" "}
              차세대 웹 선도 서비스 개발
            </$ColoredWord>
          </$Sentence>
          <$Sentence>
            국토교통과학기술진흥원
            <$ColoredWord color={"yellow"}>
              {" "}
              스마트시티 넥스트 혁신기술
            </$ColoredWord>
          </$Sentence>
          <$Sentence>
            국토교통과학기술진흥원
            <$ColoredWord color={"yellow"}>
              {" "}
              스마트시티 넥스트 혁신기술 실증
            </$ColoredWord>
          </$Sentence>
        </$Content>
        <$Content>
          <$Year>2022</$Year>
          <$Sentence>
            정보통신기획평가원
            <$ColoredWord color={"green"}>
              {" "}
              웹 기반 증강현실 인테리어 서비스 개발
            </$ColoredWord>
          </$Sentence>
          <$Sentence>
            부산 ECO DELTA CITY 이음5G특화망 사업 :
            <$ColoredWord color={"purple"}>
              {" "}
              스마트 정수장 시스템 서비스 개발
            </$ColoredWord>
          </$Sentence>
          <$Sentence>
            비대면 스타트업 육성사업
            <$ColoredWord color={"yellow"}>
              {" "}
              앱설치가 필요없는 AR광고 솔루션
            </$ColoredWord>
          </$Sentence>
          <$Sentence>
            무역센터 테스트베드 실증사업
            <$ColoredWord color={"yellow"}> AR Billboard</$ColoredWord>
          </$Sentence>
          <$Sentence>
            <$ColoredWord color={"purple"}>
              제 14기 K-water 협력 스타트업 선정
            </$ColoredWord>
          </$Sentence>
        </$Content>
        <$Content>
          <$Year>2023 ~</$Year>
          <$Sentence>
            증강현실 인테리어 서비스를 위한 객체/도면생성 기술 및 웹
            어플리케이션 개발
          </$Sentence>
          <$Sentence>
            <$ColoredWord color={"purple"}></$ColoredWord>웹 기반 ARVR 제작툴
            플랫폼 런칭예정(2025)
          </$Sentence>
        </$Content>
      </$ContentWrapper>
      <$ImgBox2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 3, ease: "easeOut" }}
      >
        <img src={img2} alt="오리너구리 이미지" />
      </$ImgBox2>
    </$Wrapper>
  );
};

export default Company;
