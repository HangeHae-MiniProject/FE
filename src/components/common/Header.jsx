import React from "react";
import styles from "../../css_modules/Header.module.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();
  return (
    <div className={styles.title}>
      <h1 onClick={() => nav("/")}>TRAPICK</h1>
    </div>
  );
};

export default Header;
