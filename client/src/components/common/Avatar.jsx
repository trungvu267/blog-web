import { Button, Dropdown } from "react-daisyui";
import { Link } from "react-router-dom";

const Avatar = () => {
  return (
    <Dropdown horizontal="left" vertical="bottom" open={true}>
      <Dropdown.Toggle style={{ background: "transparent" }} color="primary">
        <Button
          className="avatar border-2 bg-base-300 border-none"
          shape="circle"
          variant="outline"
        >
          T
        </Button>
      </Dropdown.Toggle>
      <Dropdown.Menu className="w-48" style={{ right: 0, top: 60 }}>
        <Dropdown.Item>
          <Link to={"/dashboard"}>Dashboard</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to={"/posts/create"}>Tạo bài viết</Link>
        </Dropdown.Item>
        <Dropdown.Item>Ds bài viết</Dropdown.Item>
        <Dropdown.Item>Đăng xuất</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Avatar;