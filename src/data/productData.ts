import product1 from "@Assets/image/ourProjects/product_sensor_alpha.png";

export interface ISentence {
  id: string;
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
    img: product1,
    title: "our solutions",
    sentence: [
      {
        id: "1-1",
        content: "Enjoy some of our best work in immersive",
        color: "white",
      },
      {
        id: "1-2",
        content: "web",
        color: "purple",
      },
      {
        id: "1-3",
        content: "augmented reality",
        color: "green",
      },
      {
        id: "1-4",
        content: "and",
        color: "white",
      },
      {
        id: "1-5",
        content: "new experiences",
        color: "yellow",
      },
    ],
  },
  {
    order: 2,
    img: product1,
    title: "our solutions",
    sentence: [
      {
        id: "2-1",
        content: "Enjoy some of our best work in immersive",
        color: "white",
      },
      {
        id: "2-2",
        content: "web",
        color: "purple",
      },
      {
        id: "2-3",
        content: "augmented reality",
        color: "green",
      },
      {
        id: "2-4",
        content: "and",
        color: "white",
      },
      {
        id: "2-5",
        content: "new experiences",
        color: "yellow",
      },
    ],
  },
  {
    order: 3,
    img: product1,
    title: "our solutions",
    sentence: [
      {
        id: "3-1",
        content: "Enjoy some of our best work in immersive",
        color: "white",
      },
      {
        id: "3-2",
        content: "web",
        color: "purple",
      },
      {
        id: "3-3",
        content: "augmented reality",
        color: "green",
      },
      {
        id: "3-4",
        content: "and",
        color: "white",
      },
      {
        id: "3-5",
        content: "new experiences",
        color: "yellow",
      },
    ],
  },
];
