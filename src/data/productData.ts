import product1 from "@Assets/image/ourProjects/product_sensor_alpha.png";

export interface ISentence {
  id: string;
  content: string;
  color: string;
}

interface IProduct {
  order: number;
  img: string;
  title: string;
  sentence: ISentence[];
}

export const productData: IProduct[] = [
  {
    order: 1,
    img: product1,
    title: "포토그래메트리",
    sentence: [
      {
        id: "1-1",
        content: "포토그래메트리",
        color: "purple",
      },
      {
        id: "1-2",
        content:
          "에 최적화된 스캐너 장비와 스캔 기술을 통해 퀄리티 높은 3D 모델을 생성하고 활용할 수 있습니다",
        color: "white",
      },
    ],
  },
  {
    order: 2,
    img: product1,
    title: "커넥트 허브",
    sentence: [
      {
        id: "2-1",
        content: "IoT를 위한 Zigbee 기반 ",
        color: "white",
      },
      {
        id: "2-2",
        content: "커넥트 모듈",
        color: "green",
      },
      {
        id: "2-3",
        content: "을 통해 다양한 센서를 연동하고 제어할 수 있습니다",
        color: "white",
      },
    ],
  },
  {
    order: 3,
    img: product1,
    title: "스마트 미러",
    sentence: [
      {
        id: "3-1",
        content: "커스터마이징이 가능한 스마트미러",
        color: "yellow",
      },
      {
        id: "3-2",
        content:
          "에 딥러닝 기반의 생체 정보 인식 솔루션을 통합하여 사용자 맞춤형 정보를 제공할 수 있습니다",
        color: "white",
      },
    ],
  },
];
