import { $Wrapper, $Title, $Products } from "./style";
import ProductList from "./ProductList";
import { productData } from "@Data/productData";
import Footer from "@Components/footer/Footer";

const Products = () => {
  return (
    <$Wrapper>
      <$Title>products</$Title>
      <$Products>
        {productData.map((list) => (
          <ProductList
            key={list.id}
            title={list.title}
            sentence={list.sentence}
            img={list.img}
            id={list.id}
          />
        ))}
      </$Products>
      <Footer main={false} />
    </$Wrapper>
  );
};

export default Products;
