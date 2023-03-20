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

interface IListProps {
  img: string;
  tag: string;
  title: string;
  location: string;
  period: string;
}

const item = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const WorkList = ({ img, tag, title, location, period }: IListProps) => {
  return (
    <$List variants={item}>
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
