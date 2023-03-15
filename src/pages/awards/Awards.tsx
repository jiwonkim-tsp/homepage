import { ToggleState } from "./../../recoil/atom";
import { useRecoilValue } from "recoil";

const Awards = () => {
  const toggleState = useRecoilValue(ToggleState);
  console.log(toggleState);
  return <div>Awards</div>;
};

export default Awards;
