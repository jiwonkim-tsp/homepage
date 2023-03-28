import { newsPageData } from "@Data/newsData";
import { $Wrapper, $News } from "./style";
import NewsList from "./NewsList";
import Title from "@Components/title/Title";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      duration: 3,
      delayChildren: 1,
      staggerChildren: 0.5,
    },
  },
};

const News = () => {
  return (
    <$Wrapper>
      <Title title="news" />
      <$News variants={container} initial="hidden" animate="visible">
        {newsPageData.map((list) => (
          <NewsList
            key={list.id}
            title={list.title}
            press={list.press}
            content={list.content}
            link={list.link}
            order={list.id}
          />
        ))}
      </$News>
    </$Wrapper>
  );
};

export default News;
