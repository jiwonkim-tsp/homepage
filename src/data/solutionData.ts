import arSpot from "@Assets/image/ourWork/ourWork0.png";
import arArt from "@Assets/image/ourWork/ourWork1.png";
import arNav from "@Assets/image/ourWork/ourWork2.png";
import arFace from "@Assets/image/ourWork/ourWork3.png";
import { ISentence } from "./productData";

export interface ISolutionData {
  id: number;
  src: string;
  title: string;
  content: string;
}

interface ISolutionPageData {
  order: number;
  img: string;
  title: string;
  sentence: ISentence[];
}

export const solutionMainData: ISolutionData[] = [
  {
    id: 1,
    src: arSpot,
    title: "스마트기기에서 활용 가능한 웹 기반 시각적 위치 결정 시스템",
    content:
      "특징점 기반 마커 인식과 딥러닝 기반의 6-DoF 물체 인식을 결합한 하이브리드 방식으로 공간상 현재 위치를 추적",
  },
  {
    id: 2,
    src: arArt,
    title: "딥러닝을 이용한 전광판 광고",
    content:
      "모바일 웹 환경에서 스마트폰 카메라를 통해 이미지 정보를 각 프레임마다 딥러닝모델이 분석.",
  },
  {
    id: 3,
    src: arNav,
    title: "딥러닝 기반 체험형 AR 콘텐츠",
    content: "딥러닝을 통한 물체 인식, 얼굴 인식, 포즈 인식 등 다양한 시도",
  },
  {
    id: 4,
    src: arSpot,
    title: "스마트기기에서 활용 가능한 웹 기반 시각적 위치 결정 시스템",
    content:
      "특징점 기반 마커 인식과 딥러닝 기반의 6-DoF 물체 인식을 결합한 하이브리드 방식으로 공간상 현재 위치를 추적",
  },
  {
    id: 5,
    src: arArt,
    title: "딥러닝을 이용한 전광판 광고",
    content:
      "모바일 웹 환경에서 스마트폰 카메라를 통해 이미지 정보를 각 프레임마다 딥러닝모델이 분석.",
  },
  {
    id: 6,
    src: arNav,
    title: "딥러닝 기반 체험형 AR 콘텐츠",
    content: "딥러닝을 통한 물체 인식, 얼굴 인식, 포즈 인식 등 다양한 시도",
  },
];

export const solutionPageData: ISolutionPageData[] = [
  {
    order: 1,
    img: arSpot,
    title: "웹 기반 XR 디지털트윈 시스템",
    sentence: [
      {
        id: "1-1",
        content: "웹 기반 디지털트윈",
        color: "green",
      },
      {
        id: "1-2",
        content:
          "은 빠른 현장적용이 가능하고 AR/VR 기술을 활용하여 효율적으로 시설물을 관리할 수 있습니다",
        color: "white",
      },
    ],
  },
  {
    order: 2,
    img: arSpot,
    title: "웹 탑재 딥러닝을 이용한 AR 광고",
    sentence: [
      {
        id: "1-1",
        content: "AR과 딥러닝 기술을 이용한 간편하고 효과적인",
        color: "white",
      },
      {
        id: "1-2",
        content: "웹 기반 광고 서비스",
        color: "purple",
      },
      {
        id: "1-3",
        content: "를 경험해보세요",
        color: "white",
      },
    ],
  },
  {
    order: 3,
    img: arSpot,
    title: "공간인식 기술을 활용한 AR 도슨트 서비스",
    sentence: [
      {
        id: "3-1",
        content: "공간인식 기술을 활용",
        color: "white",
      },
      {
        id: "3-2",
        content: "AR 도슨트 서비스",
        color: "pink",
      },
      {
        id: "3-3",
        content: "를 통해 과거 유적지를 생생하게 재현할 수 있습니다",
        color: "white",
      },
    ],
  },
];

// export const solutionData: ISolutionData[] = [
//   {
//     id: 1,
//     src: arSpot,
//     title: "스마트기기에서 활용 가능한 웹 기반 시각적 위치 결정 시스템",
//     content:
//       "공간의 파티의 AR 실내 내비게이션 기술은 특징점 기반 마커 인식과 딥러닝 기반의 6-DoF 물체 인식을 결합한 하이브리드 방식으로 공간상 현재 위치를 추적합니다. 마커 기반 인식은 사용자의 브라우저에서 이루어지며 딥러닝을 활용한 6DoF 물체 인식은 딥러닝 서버 연동을 통해 구현되는 방식입니다. 두 방식 모두 카메라 위치 예측을 통해 위치 정보 및 방향 정보를 추적하고 해당 위치에 맞는 AR 콘텐츠를 제공합니다. 촬영하고 있는 이미지 프레임의 변화량을 계산하여 사용자가 정지해 있으면 이전 예측 정보를 사용하는 방식의 알고리즘 적용으로 서버 및 사용자 기기의 부하를 줄이도록 개발되었습니다.",
//   },
//   {
//     id: 2,
//     src: arArt,
//     title: "딥러닝을 이용한 전광판 광고",
//     content:
//       "공간의파티에서는 RGB 이미지 정보만 사용하여 기존 전광판 광고를 대체 및 보완할 수 있는 AR 광고 솔루션을 제공합니다.모바일 웹 환경에서 스마트폰 카메라를 통해 이미지 정보를 각 프레임마다 딥러닝모델이 분석합니다.딥러닝 모델은 전광판의 존재 여부(confidence)와 객체 위치의 지역화(localization) 그리고 포즈 추정(pose estimation을 수행합니다. 세 가지 정보를 이용하여 AR 콘텐츠가 렌더링 될 위치를 3차원 공간상으로 역투영합니다.더 나아가, 기존 전광판 영상을 대체할 수 있도록 2D 이미지 분할 딥러닝 모델을 적용할 수 있습니다.",
//   },
//   {
//     id: 3,
//     src: arNav,
//     title: "딥러닝 기반 체험형 AR 콘텐츠",
//     content:
//       "공간의 파티는 체험형 AR 콘텐츠를 위해 딥러닝을 통한 물체 인식, 얼굴 인식, 포즈 인식 등 다양한 시도를 하고 있습니다. 모든 과정은 다른 센서를 사용하지 않고 RGB 이미지를 통해 이루어집니다. 물체의 위치 및 방향 정보를 통해 AR 콘텐츠를 제공하고 추가하고자 하는 물체만 재학습할 수 있도록 모듈화하여 다양한 분야에 응용이 가능합니다.",
//   },
//   {
//     id: 4,
//     src: arFace,
//     title: "단일 카메라에서의 얼굴 인식 및 포즈 추정",
//     content:
//       "단일 카메라에서 획득한 RGB 이미지를 딥러닝 모델을 이용하여 얼굴 면적, 눈과 코 등 관련된 정보를 계산합니다. 시선 방향, 얼굴 면적, 동공 크기 등을 분석하여 얼굴의 회전 각도를 계산합니다. 그리고나서, 2D 공간상의 얼굴 중심 좌표, 회전값으로 AR 콘텐츠를 렌더링합니다. 딥러닝 모델은 웹 환경에서 서버-노드 간 통신없이 실시간 처리를 위해 8비트 정수양자화, 가지치기 등 경량화 기술이 적용되었습니다. AR 콘텐츠를 렌더링할 타겟 객체만 딥러닝 모델을 재학습하면 다양한 분야에도 응용 가능합니다.",
//   },
//   {
//     id: 5,
//     src: arSpot,
//     title: "서버 통신 제약이 없는 딥러닝 서비스",
//     content:
//       "공간의파티에서 제공하는 인공지능 AR 콘텐츠 서비스는 서버-디바이스 간의 통신 없이 사용자의 스마트폰에서 딥러닝 연산을 처리합니다. 딥러닝 모델 구조 개선, 가중치 양자화, 프루닝 등 최적화 기술을 적용하여 실시간추론을 가능하게 합니다. 또한, 웹 기반의 그래픽 라이브러리(WebGL) 이용하여 행렬 및 벡터 연산을 가속화합니다. 사용자 디바이스에서 연산 및 AR 렌더링을 처리함으로써 서버 유지보수 비용을 절감할 수 있습니다.",
//   },
//   {
//     id: 6,
//     src: arArt,
//     title: "GAN을 이용한 효율적인 콘텐츠 제작",
//     content:
//       "공간의 파티는 3D 콘텐츠 제작 시간 및 비용을 줄이기 위해 효율적인 2D/3D 콘텐츠 제작을 위한 다양한 도전을 이어가고 있습니다. 기존의 이미지 생성 기술인 AE(Auto-Encoder), VAE(Variational Auto-Encoder), 그리고 GAN(Generative Adversarial Networks)을 각 솔루션에 적합하도록 구축하였습니다. 더 나아가, 단일 2D 이미지를 3D로 변환시키는 기술, 고해상도 이미지 생성 및 합성에 용이한 Multimodal Deep Learning을 개발하고 있습니다. AR 콘텐츠가 투영될 배경 영역의 합성 및 변환이 가능하도록 이미지 분할과 GAN 모델을 활용한 이미지 합성 기술을 제공합니다.",
//   },
//   {
//     id: 7,
//     src: arNav,
//     title: "엣지 컴퓨팅을 통한 웹 AR 콘텐츠",
//     content:
//       "공간의 파티의 AR 콘텐츠는 메쉬 및 텍스쳐 최적화를 통해 가벼우면서도 고품질 콘텐츠 제공이 가능합니다. 압축 기법을 사용하여 3D 모델의 용량을 줄여 로딩속도를 향상시키는 방향으로 개발되었습니다. 엣지 컴퓨터 연동을 통해 현재 위치에 맞는 콘텐츠를 안정적으로 빠르게 제공받을 수 있습니다. 엣지 컴퓨터는 도커 기술과 메쉬망 구축을 통해 유지 보수를 용이하게 하였으며 넓은 구역을 지원하여 끊김이 없는 인터넷 사용이 가능합니다.",
//   },
// ];
