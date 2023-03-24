import { $Wrapper, $Title, $Products } from "./style";
import { productData } from "@Data/productData";
import Footer from "@Components/footer/Footer";
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
      <Footer page="products" />
    </$Wrapper>
  );
};

export default Products;
