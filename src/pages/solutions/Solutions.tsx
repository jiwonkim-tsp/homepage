import { $Wrapper, $Title, $Solutions } from "./style";
import { solutionPageData } from "@Data/solutionData";
import List from "@Components/list/List";
import Footer from "@Components/footer/Footer";
import Title from "@Components/title/Title";

const Solutions = () => {
  return (
    <$Wrapper>
      <Title title="solution" />
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
      <Footer page="solutions" />
    </$Wrapper>
  );
};

export default Solutions;