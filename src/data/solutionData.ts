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
    title: "웹 기반 XR 디지털 트윈 시스템",
    sentence: [
      {
        content: "웹 기반 디지털 트윈",
        color: "green",
      },
      {
        content:
          "은 기존의 관제 시스템과 연계가 쉽고, AR/VR 기술을 활용하여 적은 인원으로 효율적인 시설 관리가 가능합니다.",
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
        content: "AR과 딥러닝 기술을 이용하여 도시 곳곳을 ",
        color: "white",
      },
      {
        content: "AR 광고 ",
        color: "green",
      },
      {
        content: "공간으로 변화시켜드립니다.",
        color: "white",
      },
    ],
  },
  {
    order: 3,
    img: arMuseum,
    title: "공간인식 기술을 기반으로 하는 AR 도슨트",
    sentence: [
      {
        content: "정밀한 공간인식 기술을 바탕으로 유적지 위에",
        color: "white",
      },
      {
        content: " AR/VR 실감 콘텐츠",
        color: "yellow",
      },
      {
        content:
          "를 제공합니다. 스마트폰만 있으면 누구나 17~18c 조선시대를 체험해 볼 수 있습니다. ",
        color: "white",
      },
    ],
  },
];
