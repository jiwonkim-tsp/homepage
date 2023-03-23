import { $List, $Press, $Title, $Content } from "./styleList";

interface IListProps {
  press: string;
  title: string;
  content: string;
}

const NewsList = ({ press, title, content }: IListProps) => {
  return (
    <$List>
      <$Press>{press}</$Press>
      <$Title>{title}</$Title>
      <$Content>{content}</$Content>
    </$List>
  );
};

export default NewsList;
