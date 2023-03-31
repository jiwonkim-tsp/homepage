import bongeunsa from "@Assets/image/clients/bongeunsa.png";
import gangnam from "@Assets/image/clients/gangnam.png";
import kocca from "@Assets/image/clients/kocca.png";
import kwangwoonUni from "@Assets/image/clients/kwangwoonUni.png";
import kwater from "@Assets/image/clients/kwater.png";
import nowon from "@Assets/image/clients/nowon.png";
import scienceCenter from "@Assets/image/clients/scienceCenter.png";
import veea from "@Assets/image/clients/veea.png";
import wtcseoul from "@Assets/image/clients/wtcseoul.png";
import yg from "@Assets/image/clients/yg.png";
import seoulDigital from "@Assets/image/clients/seoulDigital.png";

export interface IImg {
  title: string;
  img: string;
}

export const clientData: IImg[] = [
  { title: "한국수자원공사", img: kwater },
  { title: "한국콘텐츠진흥원", img: kocca },
  { title: "YG엔터테인먼트", img: yg },
  { title: "veea", img: veea },
  { title: "서울디지털재단", img: seoulDigital },
  { title: "wtc seoul", img: wtcseoul },
  { title: "시립노원청소년미래진로센터", img: nowon },
  { title: "광운대학교", img: kwangwoonUni },
  { title: "강남구", img: gangnam },
  { title: "봉은사", img: bongeunsa },
  { title: "국립과천과학관", img: scienceCenter },
];
