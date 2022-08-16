import React, { useEffect, useState } from "react";
import styles from "../../css_modules/QuePage.module.css";
import { Question } from "../../res/contents/question";
import Btn from "../elements/Btn";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sendQue } from "../../redux/modules/questionSlice";

const Que = () => {
  // ------Hook------
  //질의 넘버
  const [qNum, setQnum] = useState(0);
  //사용자 응답 결과
  const [ans, setAns] = useState([]);
  const dispatch = useDispatch();
  const resultId = useSelector((state) => state.question.resultId);
  const nav = useNavigate();

  //-------Funtion----
  //이벤트 핸들러 및 함수
  const getAnsData = (e) => {
    const value = e.target.value;
    setAns((prev) => [...prev, value]);
    setQnum(qNum + 1);
  };
  //선택 버튼이 4개일때
  const show4Btn = () => {
    return (
      <div className={styles.btnWrap}>
        <Btn
          onClick={getAnsData}
          height="7vh"
          value={Question[qNum].selection[0].value}
        >
          {Question[qNum].selection[0].answer}
        </Btn>
        <Btn
          onClick={getAnsData}
          height="7vh"
          value={Question[qNum].selection[1].value}
        >
          {Question[qNum].selection[1].answer}
        </Btn>
        <Btn
          onClick={getAnsData}
          height="7vh"
          value={Question[qNum].selection[2].value}
        >
          {Question[qNum].selection[2].answer}
        </Btn>
        <Btn
          onClick={getAnsData}
          height="7vh"
          value={Question[qNum].selection[3].value}
        >
          {Question[qNum].selection[3].answer}
        </Btn>
      </div>
    );
  };
  //선택 버튼이 2개일때
  const show2Btn = () => {
    return (
      <div className={styles.btnWrap}>
        <Btn
          onClick={getAnsData}
          height="13vh"
          value={Question[qNum].selection[0].value}
        >
          {Question[qNum].selection[0].answer}
        </Btn>
        <Btn
          onClick={getAnsData}
          height="13vh"
          value={Question[qNum].selection[1].value}
        >
          {Question[qNum].selection[1].answer}
        </Btn>
      </div>
    );
  };

  // console.log(setData);
  //디스패치 유즈이펙트 >> 이거 써줘야 resultID값을 들고옴
  useEffect(() => {
    const setData = { answersArr: ans };
    //답변의 길이가 질문의 개수와 같을때 디스패치 씀
    if (ans.length == 5) {
      dispatch(sendQue(setData));
    } else {
      return;
    }
  }, [ans]);

  //결과화면 누르면 결과페이지 이동
  const callResult = () => {
    nav(`/results/${resultId}`);
  };

  if (!Question[qNum])
    return (
      <div className={styles.resultBtn}>
        <button onClick={callResult}>내 결과 보러가기 </button>
      </div>
    );

  return (
    <div className={styles.queWrap}>
      <div className={styles.queTitle}>당신을 위한 여행국가 찾는 중...🛫 </div>
      <progress
        className={styles.queProBar}
        value={qNum + 1}
        max="5"
      ></progress>
      <div className={styles.queItem}>
        <div className={styles.queNum}>Q{qNum + 1}.</div>
        <div className={styles.queContent}>{Question[qNum].ques}</div>
        {qNum === 3 ? show4Btn() : show2Btn()}
      </div>
    </div>
  );
};

export default Que;
