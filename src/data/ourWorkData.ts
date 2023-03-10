import arSpot from "./../assets/image/ourWork/ourWork0.png";
import arArt from "./../assets/image/ourWork/ourWork1.png";
import arNav from "./../assets/image/ourWork/ourWork2.png";
import arFace from "./../assets/image/ourWork/ourWork3.png";

interface IOurWorkData {
  id: number;
  src: string;
  link: string;
}

export const ourWorkData: IOurWorkData[] = [
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
