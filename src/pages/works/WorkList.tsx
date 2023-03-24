import {
  $List,
  $ContentBox,
  $ImgBox,
  $Tag,
  $Title,
  $LocaPerBox,
  $Location,
  $Period,
} from "./styleList";
import { item } from "@Components/animation/framerMotion";

interface IListProps {
  img: string;
  tag: string;
  title: string;
  location: string;
  period: string;
  link: string;
}

const WorkList = ({ img, tag, title, location, period, link }: IListProps) => {
  return (
    <$List variants={item} onClick={() => window.open(link)}>
      <$ImgBox>
        <img src={img} alt={title} />
      </$ImgBox>
      <$ContentBox>
        <$Tag>{tag}</$Tag>
        <$Title>{title}</$Title>
        <$LocaPerBox>
          <$Location>{location}</$Location>
          <$Period>{period}</$Period>
        </$LocaPerBox>
      </$ContentBox>
    </$List>
  );
};

export default WorkList;
