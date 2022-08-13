import React from "react";
import styles from "../../css_modules/Main.module.css";
import { useNavigate } from "react-router-dom";

function ResultPage() {
  const nav = useNavigate();
  return (
    <div>
      <div className={styles.MainColor}>
        <h1>당신에게 추천하는 나라는...</h1>
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/d6/96/36/photo4jpg.jpg?w=700&h=-1&s=1"
          alt="국가이미지"
        />
        <h2>네팔입니다</h2>
        <p>네팔은 코로나19관련 격리면제가 가능한 나라입니다.</p>
        <p>더 자세한 내용은 아래를 통해 확인해보세요.</p>
        <button onClick={() => nav("/login")}>결과 저장</button>
      </div>
    </div>
  );
}
export default ResultPage;
