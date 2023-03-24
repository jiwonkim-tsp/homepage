import { ISentence } from "./productData";

export interface IContent {
  id: number;
  sentence: ISentence[];
}

export const ourTeamData: IContent[] = [
  {
    id: 1,
    sentence: [
      {
        content: "우리는 세상에 너무 ",
        color: "white",
      },
      {
        content: "많은 정보",
        color: "yellow",
      },
      {
        content: "가",
        color: "white",
      },
    ],
  },
  {
    id: 2,
    sentence: [
      {
        content: "있다고 생각합니다.",
        color: "white",
      },
    ],
  },
  {
    id: 3,
    sentence: [
      {
        content: "우리는 ",
        color: "white",
      },
      {
        content: "자기에게 맞는 정보를 모아 ",
        color: "purple",
      },
    ],
  },
  {
    id: 4,
    sentence: [
      {
        content: "보여주는 시대가 열리리라 생각합니다.",
        color: "white",
      },
    ],
  },
  {
    id: 5,
    sentence: [
      {
        content: "공간의파티의 ",
        color: "white",
      },
      {
        content: "증강현실 솔루션",
        color: "green",
      },
      {
        content: "이",
        color: "white",
      },
    ],
  },
  {
    id: 6,
    sentence: [
      {
        content: "이를 위한 첫걸음이 될 것입니다.",
        color: "white",
      },
    ],
  },
];

export const ourSolutionData: IContent[] = [
  {
    id: 1,
    sentence: [
      {
        content: "스마트폰",
        color: "purple",
      },
      {
        content: "을 가진 사람이라면",
        color: "white",
      },
    ],
  },
  {
    id: 2,
    sentence: [
      {
        content: "누구나 쉽게 체험할 수 있는 ",
        color: "white",
      },
    ],
  },
  {
    id: 3,
    sentence: [
      {
        content: "웹 기반의 증강현실",
        color: "green",
      },
      {
        content: " 솔루션입니다.",
        color: "white",
      },
    ],
  },
  {
    id: 4,
    sentence: [
      {
        content: "직관적인 UXUI로 ",
        color: "white",
      },
    ],
  },
  {
    id: 5,
    sentence: [
      {
        content: "별도의 설명없이 체험하며",
        color: "white",
      },
    ],
  },
  {
    id: 6,
    sentence: [
      {
        content: "인터랙션",
        color: "yellow",
      },
      {
        content: "이 가능합니다.",
        color: "white",
      },
    ],
  },
];

export const ourProductData: IContent[] = [
  {
    id: 1,
    sentence: [
      {
        content: "3D 데이터",
        color: "yellow",
      },
      {
        content: "를 획득할 수 있는",
        color: "white",
      },
    ],
  },
  {
    id: 2,
    sentence: [
      {
        content: "다양한 장치와 관련 제품들",
        color: "purple",
      },
      {
        content: "을",
        color: "white",
      },
    ],
  },
  {
    id: 3,
    sentence: [
      {
        content: "개발",
        color: "green",
      },
      {
        content: "하고 있습니다.",
        color: "white",
      },
    ],
  },
];
