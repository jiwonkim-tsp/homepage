import { newsData } from "@Data/newsData";
import { $Wrapper, $Title, $News } from "./style";
import NewsList from "./NewsList";
import Footer from "@Components/footer/Footer";
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
      <Footer page="news" />
    </$Wrapper>
  );
};

export default News;
