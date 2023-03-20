import { $Wrapper } from "./style";
import { circle, logo } from "./paths";
import { useState, useEffect } from "react";
import { useMotionValue, useTransform, animate, motion } from "framer-motion";
import { getIndex, useFlubber } from "./useFlubber";

const paths = [circle, logo];
const colors = ["#9F70B6", "#9F70B6"];

const Loading = () => {
  // const [pathIndex, setPathIndex] = useState(0);
  // const progress = useMotionValue(pathIndex);
  // const fill = useTransform(progress, paths.map(getIndex), colors);
  // const path = useFlubber(progress, paths);

  // useEffect(() => {
  //   const animation = animate(progress, pathIndex, {
  //     duration: 0.8,
  //     ease: "easeInOut",
  //     onComplete: () => {
  //       if (pathIndex === paths.length - 1) {
  //         progress.set(0);
  //         setPathIndex(1);
  //       } else {
  //         setPathIndex(pathIndex + 1);
  //       }
  //     },
  //   });

  //   return () => animation.stop();
  // }, [pathIndex]);

  return (
    <$Wrapper
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      {/* <svg width="400" height="400">
        <g transform="translate(10 10) scale(17 17)">
          <path stroke="#9F70B6" strokeWidth={3} fill="#9F70B6" d={circle} />
          <path stroke="#9F70B6" strokeWidth={3} fill="#9F70B6" d={logo} />
        </g>
      </svg> */}
    </$Wrapper>
  );
};

export default Loading;
