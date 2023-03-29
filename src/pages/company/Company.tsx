import img from "@Assets/image/company/pose6.png";
import img2 from "@Assets/image/company/pose7.png";
import logo from "@Assets/image/logo/KR_문자형_화이트.png";
import {
  $Wrapper,
  $ImgBox,
  $LogoBox,
  $ContentWrapper,
  $Explanation,
  $Sentence,
  $ColoredText,
  $HistoryUl,
} from "./style";
import History from "./History";
import { companyData } from "@Data/companyData";
import {
  moveLeft,
  moveRight,
  opacity,
  container,
} from "@Animation/framerMotion";

const Company = () => {
  return (
    <$Wrapper>
      <$ImgBox
        top={true}
        variants={moveLeft}
        initial="hidden"
        animate="visible"
      >
        <img src={img} alt="오리너구리 이미지" />
      </$ImgBox>
      <$LogoBox variants={opacity} initial="hidden" animate="visible">
        <img src={logo} alt="로고 이미지" />
      </$LogoBox>
      <$ContentWrapper>
        <$Explanation>
          <$Sentence>
            <$ColoredText color="yellow">웹 기반의 AR솔루션</$ColoredText>을
            개발하고,
          </$Sentence>
          <$Sentence>콘텐츠를 제작하는 (주)공간의파티입니다.</$Sentence>
          <$Sentence>자체 개발한 증강현실 솔루션들을 기반으로</$Sentence>
          <$Sentence>
            <$ColoredText color="green">웹 기반 증강현실 플랫폼</$ColoredText>을
            개발 중입니다.
          </$Sentence>
        </$Explanation>
        <$HistoryUl variants={container} initial="hidden" animate="visible">
          {companyData.map((list) => (
            <History key={list.order} year={list.year} content={list.content} />
          ))}
        </$HistoryUl>
      </$ContentWrapper>
      <$ImgBox
        top={false}
        variants={moveRight}
        initial="hidden"
        whileInView="visible"
      >
        <img src={img2} alt="오리너구리 이미지" />
      </$ImgBox>
    </$Wrapper>
  );
};

export default Company;
