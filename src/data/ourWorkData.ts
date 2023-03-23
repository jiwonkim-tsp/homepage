import ARBI from "@Assets/image/ourWork/ARBI.png";
import ARBuddha from "@Assets/image/ourWork/ARBuddha.png";
import ARFaceChanger from "@Assets/image/ourWork/ARFaceChanger.png";
import ARGallery from "@Assets/image/ourWork/ARGallery.png";
import ARIN from "@Assets/image/ourWork/ARIN.png";
import ARMuseum from "@Assets/image/ourWork/ARMuseum.png";
import ARScape from "@Assets/image/ourWork/ArScape.png";
import ArtGallery from "@Assets/image/ourWork/ArtGallery.png";
import busan from "@Assets/image/ourWork/busan.png";
import XRFit from "@Assets/image/ourWork/XRFit.png";
import YG from "@Assets/image/ourWork/YG.png";
import ARspot from "@Assets/image/ourWork/ARspot.png";

interface IOurWorkData {
  id: number;
  img: string;
  tag: string;
  title: string;
  location: string;
  period: string;
  link: string;
}

export const ourWorkData: IOurWorkData[] = [
  {
    id: 1,
    img: busan,
    tag: "Agumented Reality Digital twin Photography 3D",
    title: "디지털 트윈 모니터링 시스템",
    location: "부산 EDC 스마트 정수장",
    period: "2022~2023",
    link: "https://www.youtube.com/watch?v=3XfAgr1FrsY",
  },
  {
    id: 2,
    img: ARMuseum,
    tag: "Agumented Reality Digital twin Photography 3D",
    title: "AR 도슨트 서비스",
    location: "서울 역사박물관 공평도시유적전시관",
    period: "2022",
    link: "https://youtu.be/8l-uzgjgUBE",
  },
  {
    id: 3,
    img: ARIN,
    tag: "Agumented Reality Digital twin Photography 3D",
    title: "AR 실내 내비게이션",
    location: "노원 시립청소년 미래진로센터",
    period: "2022",
    link: "https://www.youtube.com/watch?v=geZt0OQzvAc",
  },
  {
    id: 4,
    img: ARGallery,
    tag: "Agumented Reality Digital twin Photography 3D",
    title: "AR 아트 서비스",
    location: "갤러리 바톤",
    period: "2022",
    link: "https://youtu.be/6a6e6XFq7CQ",
  },
  {
    id: 5,
    img: ARspot,
    tag: "Agumented Reality Digital twin Photography 3D",
    title: "AR 광고 서비스",
    location: "남산서울타워",
    period: "2022",
    link: "https://youtu.be/to2l8dx1D_Y",
  },
  {
    id: 6,
    img: YG,
    tag: "Agumented Reality Digital twin Photography 3D",
    title: "AR 댄스 챌린지",
    location: "YG 엔터테인먼트 트레저콘서트",
    period: "2022",
    link: "",
  },
  {
    id: 7,
    img: ARBuddha,
    tag: "Agumented Reality Digital twin Photography 3D",
    title: "AR 연등제",
    location: "봉은사",
    period: "2021",
    link: "http://news.bbsi.co.kr/news/articleView.html?idxno=3032527",
  },
  {
    id: 8,
    img: ARFaceChanger,
    tag: "Agumented Reality Digital twin Photography 3D",
    title: "AR 포토부스",
    location: "WSCE 기업공동전시관",
    period: "2022",
    link: "https://youtu.be/9LaEgpEC_NM",
  },
  {
    id: 9,
    img: ARScape,
    tag: "Agumented Reality Digital twin Photography 3D",
    title: "AR 상황판",
    location: "서울스마트시티센터",
    period: "2021",
    link: "https://www.youtube.com/watch?v=XdkviOyzCaQ",
  },
  {
    id: 10,
    img: ArtGallery,
    tag: "Agumented Reality Digital twin Photography 3D",
    title: "AR 갤러리",
    location: "WTC SEOUL",
    period: "2022",
    link: "https://www.youtube.com/watch?v=qOqotsRlcLI&t=1s",
  },
  {
    id: 11,
    img: ARBI,
    tag: "Agumented Reality Digital twin Photography 3D",
    title: "ARBi",
    location: "Under development",
    period: "2022",
    link: "https://www.youtube.com/watch?v=wnVBH2RVFmg",
  },
  {
    id: 12,
    img: XRFit,
    tag: "Agumented Reality Digital twin Photography 3D",
    title: "XR FIT",
    location: "Under development",
    period: "2022",
    link: "https://youtu.be/CR65HoGYVh4",
  },
];
