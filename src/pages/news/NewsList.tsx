import { $List, $Press, $Title, $Content } from "./styleList";
import { item } from "@Animation/framerMotion";

interface INewProps {
  title: string;
  press: string;
  content: string;
  link: string;
}

const NewsList = ({ title, press, content, link }: INewProps) => {
  return (
    <$List variants={item} onClick={() => window.open(link)}>
      <$Press>{press}</$Press>
      <$Title>{title}</$Title>
      <$Content>{content}</$Content>
    </$List>
  );
};

export default NewsList;
