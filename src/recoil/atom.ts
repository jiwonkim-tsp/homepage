import { atom } from "recoil";

export const ToggleState = atom({
  key: "toggleState",
  default: false,
});

export const LoadingState = atom({
  key: "loadingState",
  default: true,
});

export const HeaderState = atom({
  key: "headerState",
  default: false,
});
