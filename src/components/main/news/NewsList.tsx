import { $List, $Title, $Content } from "./styleList";

interface IListProps {
  title: string;
  content: string;
}

const NewsList = ({ title, content }: IListProps) => {
  return (
    <$List>
      <$Title>Agumented Reality</$Title>
      <$Content>{content}</$Content>
    </$List>
  );
};

export default NewsList;
