import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import styles from "../../css_modules/ResultPage.module.css";
import Btn from "../elements/Btn";

function ResultPage() {
  const nav = useNavigate();
  const param = useParams();

  // 비동기함수(async/await을 사용한)를 통해 get요청을 보낸다.
  const fetchResults = async () => {
    const { data } = await axios
      .get("http://nodeapi.myspaceti.me:8002/api/results/4")
      .then(function (response) {
        console.log("연결성공");
      })
      .catch(function (error) {
        console.log("연결 실패ㅜㅜ");
      });
    console.log(data);
  };

  // 생성한 fetchResults함수를 컴포넌트가 mount 됐을 때 실행하기 위해 useEffect사용
  useEffect(() => {
    fetchResults();
  }, []);
  return (
    <div className={styles.ResultWrap}>
      <h1>당신에게 추천하는 나라는</h1>
      <img
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/d6/96/36/photo4jpg.jpg?w=700&h=-1&s=1"
        alt="국가이미지"
      />
      <h2>네팔입니다</h2>
      <p>네팔은 코로나19관련 격리면제가 가능한 나라입니다.</p>
      <p>더 자세한 내용은 아래를 통해 확인해보세요.</p>
      <Btn onClick={() => nav("/login")}>결과 저장</Btn>
    </div>
  );
}
export default ResultPage;
