import { newsData } from "@Data/newsData";
import {
  $Wrapper,
  $Title,
  $News,
  $Content,
  $ContentBtnWrapper,
  $Sentence,
  $Word,
} from "./style";
import Button from "@Components/Button/Button";
import NewsList from "./NewsList";
import { useNavigate } from "react-router-dom";

const News = () => {
  const navigate = useNavigate();

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
            handleClick={() => navigate("/solutions")}
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
