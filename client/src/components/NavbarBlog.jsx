import { useMemo } from "react";
import { Navbar, Button, Form, Input, Swap } from "react-daisyui";
import { FiMoon, FiSun } from "react-icons/fi";
import { useAtom } from "jotai/react";
import { darkThemeAtom } from "../states/theme";
import { Logo } from "./common";
import { Link, useNavigate } from "react-router-dom";

const NavbarBlog = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useAtom(darkThemeAtom);
  const navigate = useNavigate();

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
    <Navbar className="bg-primary px-28 space-x-4">
      <div>
        <Logo />
      </div>
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
      <div>
        <Button
          color="ghost"
          className="avatar border-2"
          variant="outline"
          onClick={() => {
            navigate("/posts/create");
          }}
        >
          Create Post
        </Button>
      </div>
      <div>
        <Swap
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
      </div>
      <div>
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
