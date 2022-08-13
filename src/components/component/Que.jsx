import React, { useState } from "react";
import styles from "../../css_modules/QuePage.module.css";
import { Question } from "../../res/contents/question";
import Btn from "../elements/Btn";

const Que = () => {
  // ------Hook------
  //질의 넘버
  const [qNum, setQnum] = useState(0);
  //사용자 응답 결과
  const [ans, setAns] = useState([]);

  //-------Funtion----
  //이벤트 핸들러 및 함수
  const getAnsData = (e) => {
    const value = e.target.value;
    setAns((prev) => [...prev, value]);
    setQnum(qNum + 1);
    console.log(ans);
    console.log(qNum);
  };
  //사용자 응답결과 넘겨주는 함수
  // const
  // if (!Question[qNum]) return handleMoveToResult()
  // return (
  return (
    <div className={styles.queWrap}>
      <div className={styles.queTitle}>당신을 위한 여행국가 찾는 중...🛫 </div>
      <div>프로그래스 바바바바</div>
      <div className={styles.queItem}>
        <div className={styles.queNum}>Q{qNum + 1}.</div>
        <div className={styles.queContent}>{Question[qNum].que}</div>
        <div className={styles.btnWrap}>
          <Btn onClick={getAnsData} value={Question[qNum].selection[0].value}>
            {Question[qNum].selection[0].answer}
          </Btn>
          <Btn onClick={getAnsData} value={Question[qNum].selection[1].value}>
            {Question[qNum].selection[1].answer}
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default Que;
