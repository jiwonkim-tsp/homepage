import {
  $List,
  $ImgBox,
  $ProductInfo,
  $Title,
  $Content,
  $Sentence,
  $ColoredText,
} from "./styleList";
import { ISentence } from "@Data/productData";

interface IListProps {
  id: number;
  title: string;
  img: string;
  sentence: ISentence[];
}

const ProductList = ({ id, title, img, sentence }: IListProps) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: id % 2 !== 0 ? -100 : 0,
    },
    visible: {
      opacity: 1,
      x: id % 2 !== 0 ? 0 : -50,
      transition: {
        duration: 3,
        ease: "easeOut",
      },
    },
  };
  return (
    <$List id={id}>
      <$ImgBox id={id} variants={variants} initial="hidden" animate="visible">
        <img src={img} alt={title} />
      </$ImgBox>
      <$ProductInfo id={id}>
        <$Title>{title}</$Title>
        <$Content>
          {sentence.map((list) => (
            <$Sentence key={list.id}>
              <$ColoredText color={list.color}> {list.content}</$ColoredText>
            </$Sentence>
          ))}
        </$Content>
      </$ProductInfo>
    </$List>
  );
};

export default ProductList;
