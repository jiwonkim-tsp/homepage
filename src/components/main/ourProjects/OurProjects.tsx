import {
  $Wrapper,
  $ImgBox,
  $BtnContentWrapper,
  $ContentWrapper,
  $Heading,
  $Content,
  $Sentence,
  $ColoredText,
} from "./style";
import img from "./../../../assets/image/ourProjects/product_sensor_alpha.png";
import Button from "./../../Button/Button";

const OurProjects = () => {
  return (
    <$Wrapper>
      <$ImgBox
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 3, ease: "easeOut" }}
      >
        <img src={img} alt="제품 이미지" />
      </$ImgBox>
      <$BtnContentWrapper>
        <Button
          text={"Discover more of our work"}
          color={"#fff"}
          bgColor={"purple"}
        />
        <$ContentWrapper>
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
        </$ContentWrapper>
      </$BtnContentWrapper>
    </$Wrapper>
  );
};

export default OurProjects;
