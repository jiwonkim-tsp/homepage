import NavigationList from "./../navigationList/NavigationList";
import { $Nav } from "./style";

const navLists = [
  { name: "인증", link: "/awards" },
  { name: "work", link: "/ourwork" },
  { name: "solutions", link: "/aisolution" },
  { name: "구매", link: "/products" },
];

interface INavigationProps {
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navigation = ({ setOpenNav }: INavigationProps) => {
  const handleClick = () => {
    setOpenNav(false);
  };
  return (
    <$Nav onClick={handleClick}>
      {navLists.map((list) => (
        <NavigationList
          key={list.name}
          name={list.name}
          link={list.link}
          setOpenNav={setOpenNav}
        />
      ))}
    </$Nav>
  );
};

export default Navigation;
