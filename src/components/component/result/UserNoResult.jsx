//회원이지만 결과값이 없는 경우 화면
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../../css_modules/ResultPage.module.css";
import Btn from "../../elements/Btn";

const UserNoResult = () => {
  const nav = useNavigate();
  return (
    <div className={styles.ResultWrap}>
      <h2>이런..!테스트결과가 없습니다! 테스트 하러 이동하실까요?</h2>
      <div className={styles.BtnWrapper}>
        <Btn onClick={() => nav("/question")} width="150px" height="35px">
          테스트 하러가기
        </Btn>
      </div>
    </div>
  );
};

export default UserNoResult;
