import { $Wrapper, $Title, $Content } from "./style";
import { ourSolutionMainData } from "./../../../data/ourAiSolutionsdata";
import SolutionList from "./SolutionList";

const OurSolution = () => {
  return (
    <$Wrapper>
      <$Title>Our AI solutions</$Title>
      <$Content>
        {ourSolutionMainData.map((list) => (
          <SolutionList key={list.id} list={list} />
        ))}
      </$Content>
    </$Wrapper>
  );
};

export default OurSolution;
