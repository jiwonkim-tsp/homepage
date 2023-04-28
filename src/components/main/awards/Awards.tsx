import { useState, useEffect } from "react";
import {
  $Wrapper,
  $Title,
  $Awards,
  $List,
  $Content,
  $ContentUl,
  $ContentLi,
} from "./style";
import { awardsData } from "@Data/awardsData";
import { opacity } from "@Animation/framerMotion";

const Awards = () => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (document.body.offsetWidth < 480) {
      setMobile(true);
    }
  });
  return (
    <$Wrapper>
      <$Title>Awards</$Title>
      <$Awards
        initial={{ opacity: mobile ? 1 : 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: mobile ? 0 : 5, ease: "easeOut" }}
      ></$Awards>
      <$Content>
        <$ContentUl>
          <img
            src={awardsData[0].img}
            alt={awardsData[0].title}
            style={{ transform: "translateX(-5vw)" }}
          />
          <$ContentLi>2022</$ContentLi>
          <$ContentLi>
            초연결 지능화시대 DNA분야 주요 180대 혁신기업 선정
          </$ContentLi>
        </$ContentUl>
        <$ContentUl>
          <img src={awardsData[2].img} alt={awardsData[1].title} />
          <$ContentLi>2019</$ContentLi>
          <$ContentLi>
            「우리 손으로 꾸미는 3차원 세상, 브이월드 3D 모델링 공모전」 우수상
          </$ContentLi>
          <$ContentLi>2020</$ContentLi>
          <$ContentLi>
            「우리가 만들어가는 3차원 디지털 국토, 브이월드 3D 모델링 공모전」
            대상
          </$ContentLi>
          <$ContentLi>2021</$ContentLi>
          <$ContentLi>
            「함께 만드는 디지털 트윈 국토 브이월드 3D 모델링 공모전」
            소규모지역 대상, 공간정보활용 아이디어상
          </$ContentLi>
          <$ContentLi>2022</$ContentLi>
          <$ContentLi>
            「가상과 현실의 연결, 브이월드 3차원 모델링 공모전」 우수상
          </$ContentLi>
        </$ContentUl>
        <$ContentUl>
          <img src={awardsData[3].img} alt={awardsData[2].title} />
          <$ContentLi>2020</$ContentLi>
          <$ContentLi>
            「2020년 제1차 창업사회적가치 우수사례 경진대회」 최우수상
          </$ContentLi>
        </$ContentUl>
        <$ContentUl>
          <img
            src={awardsData[1].img}
            alt={awardsData[3].title}
            style={{ transform: "translateX(-4vw)" }}
          />
          <$ContentLi>2022</$ContentLi>
          <$ContentLi>제14기 K-water 협력 스타트업 선정</$ContentLi>
        </$ContentUl>
      </$Content>
    </$Wrapper>
  );
};

export default Awards;
