import { $Wrapper, $PositionWrapper, $Title, $Clients, $List } from "./style";
import { clientData } from "@Data/clientData";

const Clients = () => {
  return (
    <$Wrapper>
      <$PositionWrapper>
        <$Title>협찬사</$Title>
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
      </$PositionWrapper>
    </$Wrapper>
  );
};

export default Clients;
