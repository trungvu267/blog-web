import { Button, Dropdown } from "react-daisyui";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth.hook";
import { path } from "../../utils/path";

const Avatar = () => {
  const { auth, logout } = useAuth();
  return (
    <Dropdown horizontal="left" vertical="bottom">
      <Dropdown.Toggle style={{ background: "transparent" }} color="primary">
        <Button
          className="avatar border-2 bg-base-200 border-none"
          shape="circle"
          variant="outline"
        >
          T
        </Button>
      </Dropdown.Toggle>
      <Dropdown.Menu className="w-48 bg-base-300" style={{ right: 0, top: 60 }}>
        <Dropdown.Item>
          <Link to={"/dashboard"}>Dashboard</Link>
        </Dropdown.Item>
        {auth?.role === "administrator" && (
          <Dropdown.Item>
            <Link to={path.admin}>Admin/Dashboard</Link>
          </Dropdown.Item>
        )}
        <Dropdown.Item>
          <Link to={"/readinglist"}>Danh sách bài viết</Link>
        </Dropdown.Item>
        <Dropdown.Item onClick={logout}>Đăng xuất</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Avatar;
