import { $Wrapper, $Heading, $Content, $Sentence, $ColoredText } from "./style";

interface IMainContentProps {
  solution?: boolean;
}

const MainContent = ({ solution }: IMainContentProps) => {
  return (
    <$Wrapper solution={true}>
      <$Heading>our team is</$Heading>
      <$Content>
        <$Sentence>Enjoy some of our best work</$Sentence>
        <$Sentence>
          in immersive<$ColoredText color={"purple"}>web</$ColoredText>
        </$Sentence>
        <$Sentence>
          <$ColoredText color={"green"}>augmented reality</$ColoredText>and
        </$Sentence>
        <$Sentence>
          <$ColoredText color={"yellow"}>new experiences</$ColoredText>
        </$Sentence>
      </$Content>
    </$Wrapper>
  );
};

export default MainContent;
