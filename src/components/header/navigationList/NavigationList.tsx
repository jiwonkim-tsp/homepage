import styled from "styled-components";
import { Link } from "react-router-dom";

interface IlinkProps {
  name: string;
  link: string;
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
}
const NavigationList = ({ name, link, setOpenNav }: IlinkProps) => {
  const handleNavigation = () => setOpenNav(false);
  return (
    <List>
      <Link to={link} onClick={handleNavigation}>
        {name}
      </Link>
    </List>
  );
};

export default NavigationList;

const List = styled.li`
  background-color: blue;
  width: 100px;
  height: 100px;
`;
