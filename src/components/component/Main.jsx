import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../css_modules/Main.module.css";

function Main() {
  const nav = useNavigate();
  return (
    <div className={styles.MainColor}>
      <div className={styles.itemWrapper}>
        <h1 className={styles.MainTitle}>당신에게 추천하는 나라는 어디?</h1>
        <button className={styles.MainBtn} onClick={() => nav("/question")}>
          테스트하러 가기
        </button>
      </div>
    </div>
  );
}

export default Main;
