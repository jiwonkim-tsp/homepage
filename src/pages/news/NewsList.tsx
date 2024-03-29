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
    <$List order={order} variants={item} onClick={() => window.open(link)}>
      <$Press>{press}</$Press>
      <$Title>{title}</$Title>
      <$Content>{content}</$Content>
    </$List>
  );
};

export default NewsList;
