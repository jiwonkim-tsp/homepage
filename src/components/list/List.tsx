import {
  $List,
  $ImgBox,
  $ContentBox,
  $Title,
  $Content,
  $Sentence,
  $ColoredText,
} from "./style";
import { ISentence } from "@Data/productData";

export interface IListProps {
  order: number;
  title: string;
  img: string;
  sentence: ISentence[];
  link?: string;
}

const List = ({ order, title, img, sentence, link }: IListProps) => {
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
        <a href={link && link} target="_blank">
          <img src={img} alt={title} />
        </a>
      </$ImgBox>
      <$ContentBox order={order}>
        <$Title>{title}</$Title>
        <$Content>
          {sentence.map((list, index) => (
            <$Sentence key={index}>
              <$ColoredText color={list.color}>{list.content}</$ColoredText>
            </$Sentence>
          ))}
        </$Content>
      </$ContentBox>
    </$List>
  );
};

export default List;
