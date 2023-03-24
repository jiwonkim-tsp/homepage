import arAd from "@Assets/image/ourSolution/arAd.png";
import arMuseum from "@Assets/image/ourSolution/arMuseum.png";
import digitalTwin from "@Assets/image/ourSolution/digitalTwin.png";
import { ISentence } from "./productData";

interface ISolutionData {
  order: number;
  img: string;
  title: string;
  sentence: ISentence[];
}

export const solutionPageData: ISolutionData[] = [
  {
    order: 1,
    img: digitalTwin,
    title: "웹 기반 XR 디지털트윈 시스템",
    sentence: [
      {
        content: "웹 기반 디지털트윈",
        color: "green",
      },
      {
        content:
          "은 빠른 현장적용이 가능하고 AR/VR 기술을 활용하여 효율적으로 시설물을 관리할 수 있습니다",
        color: "white",
      },
    ],
  },
  {
    order: 2,
    img: arAd,
    title: "웹 탑재 딥러닝을 이용한 AR 광고",
    sentence: [
      {
        content: "AR과 딥러닝 기술을 이용한 간편하고 효과적인 ",
        color: "white",
      },
      {
        content: "웹 기반 광고 서비스",
        color: "green",
      },
      {
        content: "를 경험해보세요",
        color: "white",
      },
    ],
  },
  {
    order: 3,
    img: arMuseum,
    title: "공간인식 기술을 활용한 AR 도슨트",
    sentence: [
      {
        content: "공간인식 기술을 활용한",
        color: "white",
      },
      {
        content: " AR 도슨트 서비스",
        color: "yellow",
      },
      {
        content: "를 통해 과거 유적지를 생생하게 재현할 수 있습니다",
        color: "white",
      },
    ],
  },
];
