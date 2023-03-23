import { $Content, $Sentence, $ColoredText } from "./style";
import { ISentence } from "@/src/data/productData";

const MainDescrip = ({ sentence }: any) => {
  return (
    <$Content>
      {sentence.map((list: any) => (
        <$Sentence key={list.id}>
          <$ColoredText color={list.color}>{list.content}</$ColoredText>
        </$Sentence>
      ))}
    </$Content>
  );
};

export default MainDescrip;
