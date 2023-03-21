import {
  // $List,
  // $ImgBox,
  // $ContentWrapper,
  $Title,
  $Content,
  $Sentence,
  $ColoredText,
} from "./styleList";
import { ISentence } from "@Data/productData";
import styled from "styled-components";

interface IListProps {
  id: number;
  title: string;
  img: string;
  sentence: ISentence[];
}

const ProductList = ({ id, title, img, sentence }: IListProps) => {
  console.log(id);
  return (
    <$List id={id}>
      <$ImgBox id={id}>
        <img src={img} alt={title} />
      </$ImgBox>
      <$ContentWrapper id={id}>
        <$Title>{title}</$Title>
        <$Content>
          {sentence.map((list) => (
            <$Sentence key={list.id}>
              <$ColoredText color={list.color}> {list.content}</$ColoredText>
            </$Sentence>
          ))}
        </$Content>
      </$ContentWrapper>
    </$List>
  );
};

export default ProductList;

export const $List = styled.li<{ id: number }>`
  display: flex;
  align-items: center;
`;

export const $ImgBox = styled.div<{ id: number }>`
  img {
    width: 50vw;
    transform: ${({ id }) =>
      id % 2 === 0
        ? "rotate(15deg) translateX(10vw)"
        : "rotate(-15deg) translateX(-10vw)"};
  }
`;

export const $ContentWrapper = styled.div<{ id: number }>`
  width: 50vw;
  position: relative;
  z-index: 1;
  transform: ${({ id }) =>
    id % 2 === 0 ? "translate(10vw, -10vw)" : "translate(-5vw, -10vw)"};
  order: ${({ id }) => (id % 2 === 0 ? "-1" : "")};
`;
