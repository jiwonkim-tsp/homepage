import { useState, useEffect } from "react";
import { $Wrapper, $Title, $Clients, $List } from "./style";
import { clientData } from "@Data/clientData";

const Clients = () => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (document.body.offsetWidth < 480) {
      setMobile(true);
    }
  });
  return (
    <$Wrapper>
      <$Title>Clients</$Title>
      <$Clients
        initial={{ opacity: mobile ? 1 : 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: mobile ? 0 : 5, ease: "easeOut" }}
      >
        {clientData.map((list) => (
          <$List key={list.title}>
            <img src={list.img} alt={list.title} />
          </$List>
        ))}
      </$Clients>
    </$Wrapper>
  );
};

export default Clients;
