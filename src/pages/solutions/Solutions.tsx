import { $Wrapper, $Solutions } from "./style";
import { solutionPageData } from "@Data/solutionData";
import List from "@Components/list/List";
import Title from "@Components/title/Title";

const Solutions = () => {
  return (
    <$Wrapper>
      <Title title="solutions" />
      <$Solutions>
        {solutionPageData.map((list) => (
          <List
            key={list.order}
            title={list.title}
            sentence={list.sentence}
            img={list.img}
            order={list.order}
          />
        ))}
      </$Solutions>
    </$Wrapper>
  );
};

export default Solutions;
