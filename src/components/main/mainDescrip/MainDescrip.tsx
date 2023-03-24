import { $Content, $Sentence, $ColoredText } from "./style";
import { ISentence } from "@Data/productData";

interface IMainDescProps {
  sentence: ISentence[];
  main: boolean;
}

const MainDescrip = ({ sentence, main }: IMainDescProps) => {
  return (
    <$Content main={main}>
      {sentence.map((list) => (
        <$Sentence key={list.content}>
          <$ColoredText color={list.color}>{list.content}</$ColoredText>
        </$Sentence>
      ))}
    </$Content>
  );
};

export default MainDescrip;
