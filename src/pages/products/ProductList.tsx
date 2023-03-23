import {
  $List,
  $ImgBox,
  $ContentBox,
  $Title,
  $Content,
  $Sentence,
  $ColoredText,
} from "./styleList";
import { ISentence } from "@Data/productData";

export interface IListProps {
  order: number;
  title: string;
  img: string;
  sentence: ISentence[];
  isSol: boolean;
}

const ProductList = ({ order, title, img, sentence, isSol }: IListProps) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: order % 2 !== 0 ? -100 : 0,
    },
    visible: {
      opacity: 1,
      x: order % 2 !== 0 ? 0 : -50,
      transition: {
        duration: 3,
        ease: "easeOut",
      },
    },
  };

  return (
    <$List>
      <$ImgBox
        order={order}
        variants={variants}
        initial="hidden"
        whileInView="visible"
      >
        <img src={img} alt={title} />
      </$ImgBox>
      <$ContentBox order={order} isSol={isSol}>
        <$Title>{title}</$Title>
        <$Content>
          {sentence.map((list) => (
            <$Sentence key={list.id}>
              <$ColoredText color={list.color}>{list.content}</$ColoredText>
            </$Sentence>
          ))}
        </$Content>
      </$ContentBox>
    </$List>
  );
};

export default ProductList;
