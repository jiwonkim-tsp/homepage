import { ISentence } from "./productData";

export interface ISentences {
  sentence: ISentence[];
}

interface ICompany {
  order: number;
  year: string;
  content: ISentences[];
}

export const companyData: ICompany[] = [
  {
    order: 1,
    year: "2023~",
    content: [
      {
        sentence: [
          {
            content: "증강현실 인테리어 서비스를 위한 ",
            color: "white",
          },
          {
            content: "객체/도면 생성 기술 및 웹 어플리케이션 개발",
            color: "white",
          },
        ],
      },

      {
        sentence: [
          {
            content: "웹 기반 AR/VR 저작 툴",
            color: "purple",
          },
          {
            content: "플랫폼 론칭 준비(2025)",
            color: "purple",
          },
        ],
      },
    ],
  },
  {
    order: 2,
    year: "2022",
    content: [
      {
        sentence: [
          {
            content: "정보통신기획평가원 ",
            color: "white",
          },
          {
            content: "웹 기반 증강현실 인테리어 서비스 개발",
            color: "green",
          },
        ],
      },
      {
        sentence: [
          {
            content: "부산 ECO DELTA CITY 이음 5G 특화망 사업 ",
            color: "white",
          },
          {
            content: "스마트 정수장 시스템 서비스 개발",
            color: "purple",
          },
        ],
      },
      {
        sentence: [
          {
            content: "비대면 스타트업 육성사업 ",
            color: "white",
          },
          {
            content: "앱 설치가 필요 없는 AR 광고 솔루션",
            color: "yellow",
          },
        ],
      },
      {
        sentence: [
          {
            content: "무역센터 테스트베드 실증사업 ",
            color: "white",
          },
          {
            content: "AR Billboard",
            color: "yellow",
          },
        ],
      },
      {
        sentence: [
          {
            content: "제 14기 K-water 협력 스타트업 선정",
            color: "purple",
          },
        ],
      },
    ],
  },
  {
    order: 3,
    year: "2021",
    content: [
      {
        sentence: [
          {
            content: "과학기술정보통신부 ",
            color: "white",
          },
          {
            content: "ICT융합서비스경쟁력강화사업",
            color: "purple",
          },
        ],
      },
      {
        sentence: [
          {
            content: "인터넷진흥원 ",
            color: "white",
          },
          {
            content: "차세대 웹 선도 서비스 개발",
            color: "yellow",
          },
        ],
      },
      {
        sentence: [
          {
            content: "국토교통과학기술진흥원 ",
            color: "white",
          },
          {
            content: "스마트시티 넥스트 혁신기술",
            color: "green",
          },
        ],
      },
    ],
  },
];
