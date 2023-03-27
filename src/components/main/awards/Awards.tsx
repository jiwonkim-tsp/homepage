import { $Wrapper, $Title, $Awards, $List } from "./style";
import { awardsData } from "@Data/awardsData";

const Awards = () => {
  return (
    <$Wrapper>
      <$Title>awards</$Title>
      <$Awards
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 5, ease: "easeOut" }}
      >
        {awardsData.map((list) => (
          <$List key={list.title}>
            <img src={list.img} alt={list.title} />
          </$List>
        ))}
      </$Awards>
    </$Wrapper>
  );
};

export default Awards;
