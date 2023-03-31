import { $List, $Wrapper, $Press, $Title, $Content } from "./styleList";

interface IListProps {
  press: string;
  title: string;
  content: string;
  link: string;
}

const NewsList = ({ press, title, content, link }: IListProps) => {
  return (
    <$List>
      <a href={link && link} target="_blank">
        <$Wrapper>
          <$Press>{press}</$Press>
          <$Title>{title}</$Title>
          <$Content>{content}</$Content>
        </$Wrapper>
      </a>
    </$List>
  );
};

export default NewsList;
