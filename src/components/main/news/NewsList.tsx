import { $List, $Wrapper, $Press, $Title, $Content } from "./styleList";

interface IListProps {
  press: string;
  title: string;
  content: string;
}

const NewsList = ({ press, title, content }: IListProps) => {
  return (
    <$List>
      <$Wrapper>
        <$Press>{press}</$Press>
        <$Title>{title}</$Title>
        <$Content>{content}</$Content>
      </$Wrapper>
    </$List>
  );
};

export default NewsList;
