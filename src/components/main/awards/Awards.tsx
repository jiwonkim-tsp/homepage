import { useState, useEffect } from "react";
import { $Wrapper, $Title, $Awards, $List } from "./style";
import { awardsData } from "@Data/awardsData";
import { opacity } from "@Animation/framerMotion";

const Awards = () => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (document.body.offsetWidth < 480) {
      setMobile(true);
    }
  });
  return (
    <$Wrapper>
      <$Title>Awards</$Title>
      <$Awards
        initial={{ opacity: mobile ? 1 : 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: mobile ? 0 : 5, ease: "easeOut" }}
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
