import { useMemo } from "react";
import { Navbar, Button, Form, Input, Swap } from "react-daisyui";
import { FiMoon, FiSun } from "react-icons/fi";
import { useAtom } from "jotai/react";
import { darkThemeAtom } from "../states/theme";

const NavbarBlog = () => {
  const [isDarkTheme, setIsDarkTheme] = useAtom(darkThemeAtom);

  const handleToggleTheme = () => {
    setIsDarkTheme((preTheme) => !preTheme);
  };
  const element = useMemo(() => {
    return isDarkTheme
      ? {
          on: <FiSun size={"2rem"} onClick={handleToggleTheme} />,
          off: <FiMoon size={"2rem"} onClick={handleToggleTheme} />,
        }
      : {
          on: <FiMoon size={"2rem"} onClick={handleToggleTheme} />,
          off: <FiSun size={"2rem"} onClick={handleToggleTheme} />,
        };
  }, []);
  return (
    <Navbar className="bg-white flex justify-between border-b space-x-3 w-full px-[16%]  mx-auto">
      <div className="gap-x-5">
        <Button className="text-xl normal-case border-2" variant="outline">
          DEV
        </Button>

        <div className="flex-1 gap-2">
          <Form>
            <Input
              bordered
              type="text"
              placeholder="Search"
              size="md"
              className="w-96"
            />
          </Form>
        </div>
      </div>
      <div>
        <Button color="ghost" className="avatar border-2" variant="outline">
          Create Post
        </Button>

        <Swap
          className="w-[50px]"
          rotate
          onElement={
            isDarkTheme ? (
              <FiMoon size={"2rem"} onClick={handleToggleTheme} />
            ) : (
              <FiSun size={"2rem"} onClick={handleToggleTheme} />
            )
          }
          offElement={
            isDarkTheme ? (
              <FiMoon size={"2rem"} onClick={handleToggleTheme} />
            ) : (
              <FiSun size={"2rem"} onClick={handleToggleTheme} />
            )
          }
        />

        <Button
          color="ghost"
          className="avatar border-2"
          shape="circle"
          variant="outline"
        >
          T
        </Button>
      </div>
    </Navbar>
  );
};
export default NavbarBlog;
