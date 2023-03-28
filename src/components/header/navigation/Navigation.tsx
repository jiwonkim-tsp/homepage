import NavigationList from "./NavigationList";
import { $Wrapper, $Nav } from "./style";
import useScroll from "@Hooks/useScroll";

const navLists = [
  { name: "History", link: "/company", color: "purple" },
  { name: "Works", link: "/works", color: "yellow" },
  { name: "Solutions", link: "/solutions", color: "pink" },
  { name: "Products", link: "/products", color: "green" },
  { name: "News", link: "/news", color: "black" },
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
  //스크롤 비활성화
  const { enableScroll } = useScroll();
  enableScroll();

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
