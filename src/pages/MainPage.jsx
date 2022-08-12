import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css_modules/Main.module.css";

function MainPage() {
  const nav = useNavigate();
  return (
    <div>
      <div className={styles.MainColor}>
        <button></button>
      </div>
    </div>
  );
}

export default MainPage;
