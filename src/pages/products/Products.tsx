import { $Wrapper, $Products } from "./style";
import { productData } from "@Data/productData";
import List from "@Components/list/List";
import Title from "@Components/title/Title";

const Products = () => {
  return (
    <$Wrapper>
      <Title title="products" />
      <$Products>
        {productData.map((list) => (
          <List
            key={list.order}
            title={list.title}
            sentence={list.sentence}
            img={list.img}
            order={list.order}
          />
        ))}
      </$Products>
    </$Wrapper>
  );
};

export default Products;
