import NavbarBlog from "./NavbarBlog";
import { RequestLoginModal } from "./common";

const Layout = ({ children }) => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <RequestLoginModal />
      <NavbarBlog />
      <div className="container">{children}</div>
    </div>
  );
};

export default Layout;
