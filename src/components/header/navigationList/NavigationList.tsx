import { Link } from "react-router-dom";
import { $List } from "./style";

interface IlinkProps {
  name: string;
  link: string;
  // setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const NavigationList = ({ name, link }: IlinkProps) => {
  // const handleNavigation = () => setOpenNav(false);
  return (
    <$List
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to={link}>{name}</Link>
    </$List>
  );
};

export default NavigationList;
