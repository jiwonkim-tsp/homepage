import { $List, $Press, $Title, $Content } from "./styleList";

interface INewProps {
  title: string;
  press: string;
  content: string;
  link: string;
}

const NewsList = ({ title, press, content, link }: INewProps) => {
  return (
    <$List onClick={() => window.open(link)}>
      <$Press>{press}</$Press>
      <$Title>{title}</$Title>
      <$Content>{content}</$Content>
    </$List>
  );
};

export default NewsList;
