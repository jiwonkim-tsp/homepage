import { $Wrapper, $PositionWrapper, $Title, $Slider } from "./style";
import { ourSolutionMainData } from "./../../../data/ourAiSolutionsdata";
import Button from "./../../Button/Button";
import NewsList from "./NewsList";

const News = () => {
  return (
    <$Wrapper>
      <$PositionWrapper>
        <$Title>news</$Title>
        <$Slider>
          {ourSolutionMainData.map((item: any) => (
            <NewsList key={item.id} title={item.title} content={item.content} />
          ))}
        </$Slider>
        <Button
          text={"Discover more of our work"}
          color={"#fff"}
          bgColor={"purple"}
        />
      </$PositionWrapper>
    </$Wrapper>
  );
};

export default News;
