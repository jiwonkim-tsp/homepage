import styled from "styled-components";
import NavigationList from "./../navigationList/NavigationList";

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

const $Nav = styled.ul`
  width: 100vw;
  height: 100vh;
  background-color: skyblue;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;
