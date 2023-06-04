import { Navbar, Button, Form, Input } from "react-daisyui";
import { useAtom } from "jotai/react";
import { Logo, Avatar, ToggleThemeBtn } from "./common";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/auth.hook";
import { requestLoginModalAtom } from "../states/modal.state";
import { path } from "../utils/path";
import { ReqAuthBtn } from "./common";

const NavbarBlog = ({ children }) => {
  const navigate = useNavigate();
  const { auth } = useAuth();
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
          <ReqAuthBtn
            className="avatar border-2 border-base-300 text-base-300"
            variant="outline"
            handleLogic={() => navigate("/posts/create")}
          >
            Tạo bài viết
          </ReqAuthBtn>
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
