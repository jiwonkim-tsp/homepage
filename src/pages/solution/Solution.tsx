import { $Wrapper, $Title, $Solutions } from "./style";
import { solutionPageData } from "@Data/solutionData";
import ProductList from "../products/ProductList";

const Solution = () => {
  return (
    <$Wrapper>
      <$Title>solution</$Title>
      <$Solutions>
        {solutionPageData.map((list) => (
          <ProductList
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

export default Solution;
