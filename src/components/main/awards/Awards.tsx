import { useState, useEffect } from "react";
import { $Wrapper, $Title, $Awards, $List } from "./style";
import { awardsData } from "@Data/awardsData";
import { opacity, noChange } from "@Animation/framerMotion";

const Awards = () => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (document.body.offsetWidth === 480) {
      setMobile(true);
    }
  });
  return (
    <$Wrapper>
      <$Title>Awards</$Title>
      <$Awards
        variants={mobile ? noChange : opacity}
        initial="hidden"
        whileInView="visible"
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
