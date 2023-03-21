import { Link } from "react-router-dom";
import { $List } from "./styleList";
import { useRecoilState } from "recoil";
import { ToggleState } from "@Recoil/atom";

interface IlinkProps {
  name: string;
  link: string;
  color: string;
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const NavigationList = ({ name, link, color }: IlinkProps) => {
  const [toggle, setToggle] = useRecoilState(ToggleState);
  return (
    <$List
      whileHover={{ scale: 1.1 }}
      variants={item}
      color={color}
      onClick={() => setToggle(false)}
    >
      <Link to={link}>{name}</Link>
    </$List>
  );
};

export default NavigationList;
