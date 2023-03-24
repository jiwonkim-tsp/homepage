import { $List, $Year } from "./styleHistory";
import MainDescrip from "@Components/main/mainDescrip/MainDescrip";
import { ISentences } from "@Data/companyData";
import { item } from "@Animation/framerMotion";

interface IHistoryProps {
  year: string;
  content: ISentences[];
}

const History = ({ year, content }: IHistoryProps) => {
  return (
    <$List variants={item}>
      <$Year>{year}</$Year>
      {content.map((list, index) => (
        <MainDescrip key={index} sentence={list.sentence} main={false} />
      ))}
    </$List>
  );
};

export default History;
