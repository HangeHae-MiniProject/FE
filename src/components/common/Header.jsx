import React from "react";
import styles from "../../css_modules/Header.module.css";
import { useNavigate } from "react-router-dom";
import logo from "../../logo.svg"

const Header = () => {
  const nav = useNavigate();
  return (
    <div className={styles.title}>
      <h1 onClick={() => nav("/")} style={{ cursor: "pointer" }}>
        <img src={logo} alt="logo" style={{ width: "300px" }} />
      </h1>
    </div>
  );
};

export default Header;