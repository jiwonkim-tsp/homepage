import NavigationList from "./NavigationList";
import { $Wrapper, $Nav } from "./style";
import { useRecoilValue } from "recoil";
import { ToggleState } from "./../../../recoil/atom";

const navLists = [
  { name: "company", link: "/awards", color: "purple" },
  { name: "work", link: "/ourwork", color: "yellow" },
  { name: "solutions", link: "/aisolution", color: "pink" },
  { name: "products", link: "/products", color: "green" },
  { name: "news", link: "/", color: "black" },
];

const container = {
  hidden: {
    opacity: 0,
    y: -80,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 24,
      delay: 1,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
};

const Navigation = () => {
  const toggleState = useRecoilValue(ToggleState);
  console.log(toggleState);
  return (
    <$Wrapper variants={container} initial="hidden" animate="visible">
      <$Nav>
        {navLists.map((list) => (
          <NavigationList
            key={list.name}
            name={list.name}
            link={list.link}
            color={list.color}
          />
        ))}
      </$Nav>
    </$Wrapper>
  );
};

export default Navigation;
