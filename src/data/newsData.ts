interface INewData {
  id: number;
  press: string;
  title: string;
  content: string;
  link: string;
}

export const newsData: INewData[] = [
  {
    id: 1,
    press: "BBS NEWS",
    title:
      "엣지컴퓨팅 기술과 딥러닝을 적용한 웹 기반 증강현실 실내내비게이션 시스템",
    content:
      "국토교통부는 9일 경기도 판교테크노벨리의 스타트업 캠퍼스에서 ‘스마트시티 넥스트 혁신기술 실증사업’ 협약식을 열고 4개 기술에 대한 사업 협약을 맺었다",
    link: "http://news.bbsi.co.kr/news/articleView.html?idxno=3032527",
  },
  {
    id: 2,
    press: "KBS",
    title: "증강현실로 만나는 부처님, 증강현실 연등제",
    content:
      "서울 봉은사 경내 곳곳에 각종 데이터가 저장된 바코드, 대형 QR코드가 인쇄된 현수막이 설치돼있습니다. 스마트폰으로 QR코드를 비추자 연꽃 위에 앉아있는 부처님이 눈 앞에 펼쳐집니다.",
    link: "https://news.kbs.co.kr/news/view.do?ncd=5187559",
  },
  {
    id: 3,
    press: "전자신문",
    title: "명함 속, 나를 표현하는 새로운 방법 증강현실로 만드는 나만의 명함",
    content:
      "담을 수 있는 정보가 한정돼 있고 수정이 번거로운 인쇄 명함의 단점을 개선할 수 있다. 명함을 인식해 사업 소개 영상을 띄우거나 전용 메타버스 공간으로 확장도 가능하다.",
    link: "https://www.etnews.com/20220421000172",
  },
  {
    id: 4,
    press: "GalleryBaton",
    title:
      "증강현실로 표현하는 다채로운 세계, 생동강 넘치는 미술 작품을 느껴보세요",
    content: "",
    link: "https://www.youtube.com/watch?v=s5pFr9Gkj5A",
  },
  {
    id: 5,
    press: "서울스마트시티센터",
    title:
      "도시모형 위 증강현실로 바라보는 서울, 공공데이터를 결합한 지역 안내 솔루션",
    content: "",
    link: "https://www.youtube.com/watch?v=XdkviOyzCaQ",
  },
];
