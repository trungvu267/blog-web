import Menu from "./Menu";
import NavbarBlog from "./NavbarBlog";
import TitlePost from "./TitlePost";
import Post from "./post/Post";

const Layout = ({ children }) => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <NavbarBlog />
      {/* <div className="container">{children}</div>
       */}
      <div className="container flex ">
        <Menu></Menu>
        <div className="w-[56%]   p-5">{children}</div>
        <TitlePost></TitlePost>
      </div>
    </div>
  );
};

export default Layout;
