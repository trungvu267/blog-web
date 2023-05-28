import { Button } from "react-daisyui";
import { FiMoon, FiSun } from "react-icons/fi";
import { useAtom } from "jotai";
import { darkThemeAtom } from "../../states/theme";

const ToggleThemeBtn = () => {
  const [isDarkTheme, setIsDarkTheme] = useAtom(darkThemeAtom);
  const handleToggleTheme = () => {
    setIsDarkTheme((preTheme) => !preTheme);
  };
  return (
    <Button className="border-none  bg-transparent hover:bg-transparent focus:bg-transparent">
      {isDarkTheme ? (
        <FiMoon
          size={"2rem"}
          onClick={handleToggleTheme}
          className="text-base-300"
        />
      ) : (
        <FiSun
          size={"2rem"}
          onClick={handleToggleTheme}
          className="text-base-300"
        />
      )}
    </Button>
  );
};
export default ToggleThemeBtn;
