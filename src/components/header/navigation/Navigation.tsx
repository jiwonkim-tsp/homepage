import NavigationList from "./../navigationList/NavigationList";
import { $Wrapper, $Nav, $Contact, $Title, $Content } from "./style";

const navLists = [
  { name: "Certificate", link: "/awards" },
  { name: "Our Work", link: "/ourwork" },
  { name: "Our Solutions", link: "/aisolution" },
  { name: "News", link: "/aisolution" },
  { name: "Products", link: "/products" },
];

// interface INavigationProps {
//   setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
// }

const Navigation = () => {
  // const handleClick = () => {
  //   setOpenNav(false);
  // };
  return (
    <$Wrapper>
      <$Contact>
        <$Title>Contact</$Title>
        <$Content>02-5445-3982</$Content>
        <$Content>연구소 : 서울 강남구 학동로 101길 26</$Content>
      </$Contact>
      <$Nav>
        {navLists.map((list) => (
          <NavigationList key={list.name} name={list.name} link={list.link} />
        ))}
      </$Nav>
    </$Wrapper>
  );
};

export default Navigation;
