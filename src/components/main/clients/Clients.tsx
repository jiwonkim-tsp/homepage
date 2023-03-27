import { $Wrapper, $Title, $Clients, $List } from "./style";
import { clientData } from "@Data/clientData";

const Clients = () => {
  return (
    <$Wrapper>
      <$Title>clients</$Title>
      <$Clients
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 5, ease: "easeOut" }}
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
