import { newsData } from "./../../data/newsData";
import {
  $Wrapper,
  $Title,
  $News,
  $BtnWrapper,
  $Content,
  $ContentBtnWrapper,
  $Sentence,
  $Word,
} from "./style";
import Button from "./../../components/Button/Button";
import NewsList from "./NewsList";

const News = () => {
  const handleClick = () => {};

  return (
    <$Wrapper>
      <$Title>News</$Title>
      <$News>
        {newsData.map((list) => (
          <NewsList
            key={list.id}
            title={list.title}
            press={list.press}
            content={list.content}
            link={list.link}
          />
        ))}
      </$News>
      <$Content>
        <$ContentBtnWrapper>
          <Button
            text={"Get in touch"}
            color={""}
            bgColor={"green"}
            handleClick={handleClick}
          />
        </$ContentBtnWrapper>
        <$Sentence>
          <$Word>Let's make</$Word>
          <$Word>something</$Word>
          <$Word>new</$Word>
        </$Sentence>
      </$Content>
    </$Wrapper>
  );
};

export default News;
