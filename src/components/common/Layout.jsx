import React from "react";
import Header from "../common/Header";

const Layout = ({ children }) => {
  return (
    <div style={{ width: "768px", height: "100vh", margin: "0 auto" }}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
