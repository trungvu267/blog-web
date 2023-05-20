import { Navbar, Button, Form, Input } from "react-daisyui";
import { FiMoon, FiSun } from "react-icons/fi";
import { useAtom } from "jotai/react";
import { darkThemeAtom } from "../states/theme";
import { Logo, Avatar } from "./common";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NavbarBlog = ({ children }) => {
  const navigate = useNavigate();

  return (
    <>
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
            className="avatar border-2 border-base-300 text-base-300"
            variant="outline"
            onClick={() => {
              navigate("/posts/create");
            }}
          >
            Create Post
          </Button>
        </div>
        <div>
          <ToggleThemeBtn />
        </div>
        <div>
          <Avatar />
        </div>
      </Navbar>
      {children}
    </>
  );
};
export default NavbarBlog;

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
