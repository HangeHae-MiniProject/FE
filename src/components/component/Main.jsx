import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "../../css_modules/MainPage.module.css";
import Btn from "../elements/Btn";

function Main() {
  const nav = useNavigate();
  return (
    <div className={styles.MainWrap}>
      <div className={styles.MainTitle}>
        당신을 위한
        <h1>추천 여행지는?</h1>
      </div>
      <div className={styles.btnContainer}>
        <Btn onClick={() => nav("/question")} backgroundColor="black">
          테스트하러 가기
        </Btn>
      </div>
    </div>
  );
}

export default Main;
