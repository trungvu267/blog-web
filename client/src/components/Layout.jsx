import React from "react";
import NavbarBlog from "./NavbarBlog";

const Layout = ({ children }) => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <NavbarBlog />
      <div className="max-w-5xl mx-auto mt-2">{children}</div>
    </div>
  );
};

export default Layout;
