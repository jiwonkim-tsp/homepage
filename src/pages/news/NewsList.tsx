import { $List, $Press, $Title, $Content } from "./styleList";
import { item } from "@Animation/framerMotion";

interface INewProps {
  title: string;
  press: string;
  content: string;
  link: string;
  order: number;
}

const NewsList = ({ title, press, content, link, order }: INewProps) => {
  return (
    <$List order={order} variants={item}>
      <a href={link && link} target="_blank">
        <$Press>{press}</$Press>
        <$Title>{title}</$Title>
        <$Content>{content}</$Content>
      </a>
    </$List>
  );
};

export default NewsList;
