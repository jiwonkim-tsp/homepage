import arAd from "@Assets/image/ourSolution/arAd.png";
import arMuseum from "@Assets/image/ourSolution/arMuseum.png";
import digitalTwin from "@Assets/image/ourSolution/digitalTwin.png";
import { ISentence } from "./productData";

interface ISolutionData {
  order: number;
  img: string;
  link: string;
  title: string;
  sentence: ISentence[];
}

export const solutionPageData: ISolutionData[] = [
  {
    order: 1,
    img: digitalTwin,
    link: "https://www.youtube.com/watch?v=BJSeKC8EwqY",
    title: "웹 기반 디지털 트윈 통합 솔루션",
    sentence: [
      {
        content: "Modeling(구축)",
        color: "yellow",
      },
      {
        content: "AR을 위한 3D 모델링, VR 작업, HMI등을 위한 UXUI 작업",
        color: "white",
      },
      {
        content: "Data Organizing(데이터 분류)",
        color: "yellow",
      },
      {
        content: "센서 데이터 수집 및 분류(Tag 확인 및 시각화를 위한 정리)",
        color: "white",
      },
      {
        content: "Data Acqusition(데이터 획득)",
        color: "yellow",
      },
      {
        content:
          "BIM 데이터 분석, LIDAR 3D 스캐닝 데이터 분석 및 모델링 치수화",
        color: "white",
      },
      {
        content: "Optimization(최적화)",
        color: "yellow",
      },
      {
        content:
          "최소한의 인원으로 시설 유지 보수 관리, 빠른 대응을 통한 사전 대비",
        color: "white",
      },
      {
        content: "Analysis(분석)",
        color: "yellow",
      },
      {
        content:
          "유지보수 로그 기록 및 대응 메뉴얼 정리, 센서 데이터 추이 그래프를 제공",
        color: "white",
      },
      {
        content: "Integration(연계)",
        color: "yellow",
      },
      {
        content: "현장 AR과 관제센터 및 VR, HMI 등을 WebRTC로 연동",
        color: "white",
      },
    ],
  },
  {
    order: 2,
    img: arAd,
    link: "https://youtu.be/to2l8dx1D_Y",
    title: "웹 기반 ARVR 솔루션",
    sentence: [
      {
        content: "Neural Architecture Search",
        color: "yellow",
      },
      {
        content: "기반의 모바일 깊이 추론 모델",
        color: "white",
      },
      {
        content: "Monocular Depth Estimation",
        color: "yellow",
      },
      {
        content: "기반의 실시간 3D Model Reconstruction",
        color: "white",
      },
      {
        content: "공간상 객체 포즈 추적 기술",
        color: "yellow",
      },
      {
        content: "AR 콘텐츠 제공 시 사용자의 이동에 맞춰 비추는 방향에 따라",
        color: "white",
      },
      {
        content:
          "공간상 객체 포즈를 추적하여 별도의 마커 없이 가상 모델의 위치를 추적",
        color: "white",
      },
    ],
  },
  {
    order: 3,
    img: arMuseum,
    link: "https://youtu.be/8l-uzgjgUBE",
    title: "앱 기반과 비교해 웹 기반 디지털트윈의 장점",
    sentence: [
      {
        content: "- 별도의 장비 구입 및 교육과정 없이 즉각적인 활용 가능",
        color: "yellow",
      },
      {
        content: "- 실시간 업데이트로 확장성이 뛰어나고 유지보수가 용이함",
        color: "yellow",
      },
      {
        content: "- 넓은 지역에 상대적으로 적은 비용으로 구축 가능",
        color: "yellow",
      },
    ],
  },
];
