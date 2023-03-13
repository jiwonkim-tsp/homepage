import { $List, $ImgBox, $Wrapper, $Title, $Content } from "./styleList";
import type { ISolutionData } from "./../../../data/ourAiSolutionsdata";

interface IListProps {
  list: ISolutionData;
}

const SolutionList = ({ list }: IListProps) => {
  const { src, title, content } = list;
  return (
    <$List>
      <$ImgBox>
        <img src={src} alt={title} />
      </$ImgBox>
      <$Wrapper>
        <$Title>{title}</$Title>
        <$Content>{content}</$Content>
      </$Wrapper>
    </$List>
  );
};

export default SolutionList;
