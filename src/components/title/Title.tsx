import { $Title } from "./style";

interface ITitle {
  title: string;
}

const Title = ({ title }: ITitle) => {
  return (
    <$Title
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3, ease: "easeOut" }}
    >
      {title}
    </$Title>
  );
};

export default Title;
