import productSensor from "@Assets/image/ourProducts/productSensor.png";
import scanner from "@Assets/image/ourProducts/scanner.png";
import smartMirror from "@Assets/image/ourProducts/smartMirror.png";

export interface ISentence {
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
    img: scanner,
    title: "포토그래메트리",
    sentence: [
      {
        content: "포토그래메트리",
        color: "purple",
      },
      {
        content:
          "에 최적화된 스캐너 장비와 스캔 기술을 제공하여 퀄러티 높은 3D 모델을 생성할 수 있습니다.",
        color: "white",
      },
    ],
  },
  {
    order: 2,
    img: productSensor,
    title: "IoT Sensor Supporter",
    sentence: [
      {
        content: "IoT를 위한 WiFi, BLE, Zigbee 기반 ",
        color: "white",
      },
      {
        content: "네트워크 모듈",
        color: "green",
      },
      {
        content: "을 통해 다양한 센서들을 연동하고 웹으로 제어할 수 있습니다.",
        color: "white",
      },
    ],
  },
  {
    order: 3,
    img: smartMirror,
    title: "스마트미러",
    sentence: [
      {
        content: "AI 솔루션을 탑재할 수 있는 스마트미러",
        color: "yellow",
      },
      {
        content:
          "에 무구속 생체 정보 인식 솔루션을 통합하여 다양한 맞춤형 정보를 제공할 수 있습니다.",
        color: "white",
      },
    ],
  },
];
