import { Navbar, Button, Form, Input } from "react-daisyui";
import { FiMoon, FiSun } from "react-icons/fi";
import { useAtom } from "jotai/react";
import { darkThemeAtom } from "../states/theme";
import { Logo, Avatar, ToggleThemeBtn } from "./common";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/auth.hook";
import { requestLoginModalAtom } from "../states/modal.state";
import { path } from "../utils/path";

const NavbarBlog = ({ children }) => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const [, setRequestLoginModal] = useAtom(requestLoginModalAtom);
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
              auth ? navigate("/posts/create") : setRequestLoginModal(true);
            }}
          >
            Tạo bài viết
          </Button>
        </div>
        <div>
          <ToggleThemeBtn />
        </div>
        <div>
          {!!auth ? (
            <Avatar />
          ) : (
            <Button
              className="avatar border-2 border-base-300 text-base-300"
              variant="outline"
              onClick={() => navigate(path.login)}
            >
              Đăng nhập
            </Button>
          )}
        </div>
      </Navbar>
      {children}
    </>
  );
};
export default NavbarBlog;
