import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { sendLogin } from "../../redux/modules/looginSlice";

import styles from "../../css_modules/ResultPage.module.css";
import Btn from "../elements/Btn";

function MyResult() {
  const nav = useNavigate();
  const data = useSelector((state) => state.sendLogin);

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div className={styles.ResultWrap}>
      <h1>00님의 결과</h1>
      <img
        src="https://post-phinf.pstatic.net/MjAxOTA5MDVfMzIg/MDAxNTY3NjQ4NDU4NTU1.4P198NsA7oOjGxw5TVkAgx_BbyXnhq-CgYR7Xg6tz9wg.ZDZHSj0lYWHbUMQU-wKlUyqjXYCQG0raRFEXT2FmCdsg.JPEG/2018033040211722.jpg?type=w1200"
        alt="국가이미지"
      />
      <h2>이탈리아입니다.</h2>
      <p>이탈리아은 이런도시입니다. 저런도시고 이렇다고 합니다</p>
      {/* 버튼 클릭시 로컬스토리지에 저장된 토큰 삭제... */}
      <Btn onClick={() => localStorage.removeItem("key").then(nav("/"))}>
        로그아웃
      </Btn>
    </div>
  );
}

export default MyResult;
