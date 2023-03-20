import arSpot from "./../assets/image/ourWork/ourWork0.png";
import arArt from "./../assets/image/ourWork/ourWork1.png";
import arNav from "./../assets/image/ourWork/ourWork2.png";
import arFace from "./../assets/image/ourWork/ourWork3.png";

interface IOurWorkMainData {
  id: number;
  src: string;
  link: string;
}

interface IOurWorkData {
  id: number;
  img: string;
  tag: string;
  title: string;
  location: string;
  period: string;
}

export const ourWorkMainData: IOurWorkMainData[] = [
  { id: 1, src: arSpot, link: "https://www.youtube.com/watch?v=to2l8dx1D_Y" },
  { id: 2, src: arArt, link: "https://www.youtube.com/watch?v=6a6e6XFq7CQ" },
  { id: 3, src: arNav, link: "https://www.youtube.com/watch?v=geZt0OQzvAc" },
  {
    id: 4,
    src: arFace,
    link: "https://www.youtube.com/watch?v=9LaEgpEC_NM&t=1s",
  },
  { id: 5, src: arSpot, link: "https://www.youtube.com/watch?v=to2l8dx1D_Y" },
  { id: 6, src: arArt, link: "https://www.youtube.com/watch?v=6a6e6XFq7CQ" },
  { id: 7, src: arNav, link: "https://www.youtube.com/watch?v=geZt0OQzvAc" },
  {
    id: 8,
    src: arFace,
    link: "https://www.youtube.com/watch?v=9LaEgpEC_NM&t=1s",
  },
];

export const ourWorkData: IOurWorkData[] = [
  {
    id: 1,
    img: arSpot,
    tag: "Agumented Reality Digital twin Photography 3D",
    title: "디지털 트윈 모니터링 시스템",
    location: "부산 EDC 스마트 정수장",
    period: "2022~2023",
  },
  {
    id: 2,
    img: arSpot,
    tag: "Agumented Reality Digital twin Photography 3D",
    title: "AR 도슨트 서비스",
    location: "서울 역사박물관 공평도시유적전시관",
    period: "2022",
  },
  {
    id: 3,
    img: arSpot,
    tag: "Agumented Reality Digital twin Photography 3D",
    title: "AR 실내 내비게이션",
    location: "노원 시립청소년 미래진로센터",
    period: "2022",
  },
  {
    id: 4,
    img: arSpot,
    tag: "Agumented Reality Digital twin Photography 3D",
    title: "AR 아트 서비스",
    location: "갤러리 바톤",
    period: "2022",
  },
  {
    id: 5,
    img: arSpot,
    tag: "Agumented Reality Digital twin Photography 3D",
    title: "AR 광고 서비스",
    location: "남산서울타워",
    period: "2022",
  },
  {
    id: 6,
    img: arSpot,
    tag: "Agumented Reality Digital twin Photography 3D",
    title: "AR 댄스 챌린지",
    location: "YG 엔터테인먼트 트레저콘서트",
    period: "2022",
  },
  {
    id: 7,
    img: arSpot,
    tag: "Agumented Reality Digital twin Photography 3D",
    title: "AR 연등제",
    location: "봉은사",
    period: "2021",
  },
  {
    id: 8,
    img: arSpot,
    tag: "Agumented Reality Digital twin Photography 3D",
    title: "AR 포토부스",
    location: "WSCE 기업공동전시관",
    period: "2022",
  },
  {
    id: 9,
    img: arSpot,
    tag: "Agumented Reality Digital twin Photography 3D",
    title: "AR 포토부스",
    location: "WSCE 기업공동전시관",
    period: "2022",
  },
  {
    id: 10,
    img: arSpot,
    tag: "Agumented Reality Digital twin Photography 3D",
    title: "AR 상황판",
    location: "서울스마트시티센터",
    period: "2021",
  },
  {
    id: 11,
    img: arSpot,
    tag: "Agumented Reality Digital twin Photography 3D",
    title: "AR 갤러리",
    location: "WTC SEOUL",
    period: "2022",
  },
  {
    id: 12,
    img: arSpot,
    tag: "Agumented Reality Digital twin Photography 3D",
    title: "ARBi",
    location: "Under development",
    period: "2022",
  },
  {
    id: 13,
    img: arSpot,
    tag: "Agumented Reality Digital twin Photography 3D",
    title: "XR FIT",
    location: "Under development",
    period: "2022",
  },
];
