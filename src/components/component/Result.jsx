import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getResults } from "../../redux/modules/resultsSlice";

import styles from "../../css_modules/ResultPage.module.css";
import Btn from "../elements/Btn";

function ResultPage() {
  const nav = useNavigate();
  const param = useParams();
  const dispatch = useDispatch();

  // 로딩, 에러상태 + 결과값 store로 부터 가져오기
  const { isLoading, error } = useSelector((state) => state.result);

  const userResult = useSelector((state) => state.result.results);

  // 화면에 처음 마운트 되었을때 dispatch실행
  useEffect(() => {
    dispatch(getResults(param.resultId));
  }, []);
  console.log("랜더링?");
  if (isLoading) {
    return <div className={styles.ResultWrap}>로딩 중...</div>;
  } else if (error) {
    return <div className={styles.ResultWrap}>{error.message}</div>;
    // userResult가 pending일때 undefined인 경우 예외처리
  } else if (userResult !== undefined) {
    return (
      <div className={styles.ResultWrap}>
        <h1>당신에게 추천하는 나라는</h1>
        <img src={userResult.countryInfo.resultImageUrl} alt="국가이미지" />
        <h2>
          {userResult.countryInfo.headText}{" "}
          <span style={{ fontSize: "2.5rem" }}>
            {userResult.countryInfo.countryName}
          </span>
          입니다
        </h2>
        <p>더 자세한 내용은 아래를 통해 확인해보세요.</p>
        <Btn onClick={() => nav("/login")}>결과 저장</Btn>
      </div>
    );
  }
}

export default ResultPage;
