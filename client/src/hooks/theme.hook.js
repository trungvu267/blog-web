import { useAtom } from "jotai";
import { darkThemeAtom } from "../states/theme";

export const useTheme = () => {
  const [, setIsDarkTheme] = useAtom(darkThemeAtom);
  const isDarkTheme = JSON.parse(localStorage.getItem("theme"));
  return {
    isDarkTheme,
    setIsDarkTheme,
  };
};
