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
        id: "1-1",
        content: "우리는 세상에 너무 ",
        color: "white",
      },
      {
        id: "1-2",
        content: "많은 정보",
        color: "yellow",
      },
      {
        id: "1-3",
        content: "가",
        color: "white",
      },
    ],
  },
  {
    id: 2,
    sentence: [
      {
        id: "2-1",
        content: "있다고 생각합니다.",
        color: "white",
      },
    ],
  },
  {
    id: 3,
    sentence: [
      {
        id: "3-1",
        content: "우리는 ",
        color: "white",
      },
      {
        id: "3-2",
        content: "자기에게 맞는 정보를 모아 ",
        color: "purple",
      },
    ],
  },
  {
    id: 4,
    sentence: [
      {
        id: "4-1",
        content: "보여주는 시대가 열리리라 생각합니다.",
        color: "white",
      },
    ],
  },
  {
    id: 5,
    sentence: [
      {
        id: "5-1",
        content: "공간의파티의 ",
        color: "white",
      },
      {
        id: "5-2",
        content: "증강현실 솔루션",
        color: "green",
      },
      {
        id: "5-3",
        content: "이",
        color: "white",
      },
    ],
  },
  {
    id: 6,
    sentence: [
      {
        id: "6-1",
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
        id: "1-1",
        content: "스마트폰",
        color: "yellow",
      },
      {
        id: "1-2",
        content: "을 가진 사람이라면",
        color: "white",
      },
    ],
  },
  {
    id: 2,
    sentence: [
      {
        id: "2-1",
        content: "누구나 쉽게 체험할 수 있는 ",
        color: "white",
      },
    ],
  },
  {
    id: 3,
    sentence: [
      {
        id: "3-1",
        content: "웹 기반의 증강현실",
        color: "green",
      },
      {
        id: "3-2",
        content: " 솔루션입니다.",
        color: "white",
      },
    ],
  },
  {
    id: 4,
    sentence: [
      {
        id: "4-1",
        content: "직관적인 UXUI로 ",
        color: "white",
      },
    ],
  },
  {
    id: 5,
    sentence: [
      {
        id: "5-1",
        content: "별도의 설명없이 체험하며",
        color: "white",
      },
    ],
  },
  {
    id: 6,
    sentence: [
      {
        id: "6-1",
        content: "인터랙션이 가능합니다.",
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
        id: "1-1",
        content: "3D 데이터 ",
        color: "yellow",
      },
      {
        id: "1-2",
        content: "을 가진 사람이라면",
        color: "white",
      },
    ],
  },
  {
    id: 2,
    sentence: [
      {
        id: "2-1",
        content: "누구나 쉽게 체험할 수 있는",
        color: "white",
      },
    ],
  },
  {
    id: 3,
    sentence: [
      {
        id: "3-1",
        content: " 솔루션입니다.",
        color: "white",
      },
    ],
  },
];
