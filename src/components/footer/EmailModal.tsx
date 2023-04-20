import styled from "styled-components";
import { motion } from "framer-motion";
import colors from "@Constants/color";

interface IShowModal {
  showModal: boolean;
}

const show = {
  opacity: 1,
  transition: {
    duration: 2,
  },
  transitionEnd: {
    display: "none",
  },
};

const hide = {
  opacity: 0,
  transition: {
    duration: 2,
  },
  transitionEnd: {
    display: "none",
  },
};

const EmailModal = ({ showModal }: IShowModal) => {
  return (
    <$Modal animate={showModal ? show : hide}>이메일이 복사되었습니다.</$Modal>
  );
};

export default EmailModal;

const $Modal = styled(motion.div)`
  position: absolute;
  bottom: 3vw;
  width: 20vw;
  height: 5vw;
  font-family: "NanumSquare";
  font-size: 1.2vw;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1vw;
  @media (max-width: 480px) {
    width: 50vw;
    height: 10vw;
    font-size: 3.5vw;
  }
`;
