import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../css_modules/Main.module.css";
import Btn from "../elements/Btn";

function Main() {
  const nav = useNavigate();
  return (
    <div className={styles.MainColor}>
      <div className={styles.itemWrapper}>
        <h1 className={styles.MainTitle}>당신에게 추천하는 나라는 어디?</h1>
        <Btn onClick={() => nav("/question")} backgroundColor="black">
          테스트하러 가기
        </Btn>
      </div>
    </div>
  );
}

export default Main;
