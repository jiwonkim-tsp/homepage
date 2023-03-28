export const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      duration: 3,
      delayChildren: 1,
      staggerChildren: 0.5,
    },
  },
};

export const item = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 3 } },
};

export const moveLeft = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 3, ease: "easeOut" } },
};

export const moveRight = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 3, ease: "easeOut" } },
};

export const opacity = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 3, ease: "easeOut" } },
};

export const noChange = {
  hidden: {},
  visible: {},
};
export const scale = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 4, ease: "easeOut" },
  },
};
