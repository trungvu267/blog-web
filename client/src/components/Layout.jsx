import NavbarBlog from "./NavbarBlog";

const Layout = ({ children }) => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <NavbarBlog />
      <div className=" ">{children}</div>
    </div>
  );
};

export default Layout;
