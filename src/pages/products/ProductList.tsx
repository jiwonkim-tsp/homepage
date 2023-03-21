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
  order: number;
  title: string;
  img: string;
  sentence: ISentence[];
}

const ProductList = ({ order, title, img, sentence }: IListProps) => {
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
    <$List order={order}>
      <$ImgBox
        order={order}
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        <img src={img} alt={title} />
      </$ImgBox>
      <$ProductInfo order={order}>
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
