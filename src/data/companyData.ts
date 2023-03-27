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
    year: "",
    content: [
      {
        sentence: [
          {
            content: "웹 기반의 증강현실 솔루션",
            color: "yellow",
          },
          {
            content: "들을 개발하고,",
            color: "white",
          },
        ],
      },
      {
        sentence: [
          {
            content: "이에 적합한 ",
            color: "white",
          },
          {
            content: "콘텐츠",
            color: "yellow",
          },
          {
            content: "를 제작하는 회사입니다.",
            color: "white",
          },
        ],
      },
      {
        sentence: [
          {
            content: "다양한 증강현실 솔루션들을 기반으로 ",
            color: "white",
          },
          {
            content: "웹 기반 증강현실 플랫폼",
            color: "green",
          },
          {
            content: "을",
            color: "white",
          },
        ],
      },
      {
        sentence: [
          {
            content: "개발 중입니다.",
            color: "white",
          },
        ],
      },
    ],
  },

  {
    order: 4,
    year: "2023~",
    content: [
      {
        sentence: [
          {
            content:
              "증강현실 인테리어 서비스를 위한 객체/도면생성 기술 및 웹 어플리케이션 개발",
            color: "white",
          },
        ],
      },
      {
        sentence: [
          {
            content: "웹 기반 ARVR 제작툴 플랫폼 런칭예정(2025)",
            color: "purple",
          },
        ],
      },
    ],
  },
  {
    order: 3,
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
            content: "부산 ECO DELTA CITY 이음5G특화망 사업 : ",
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
            content: "앱설치가 필요없는 AR광고 솔루션",
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
    order: 2,
    year: "2021",
    content: [
      {
        sentence: [
          {
            content: "과기부, ",
            color: "white",
          },
          {
            content: "ICT융합서비스 경쟁력 강화사업",
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
            color: "green",
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
            color: "yellow",
          },
        ],
      },
    ],
  },
];
