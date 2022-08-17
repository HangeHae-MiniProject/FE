import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { saveUserInfo } from "../../redux/modules/resultsSlice";

import styles from "../../css_modules/ResultPage.module.css";
import Btn from "../elements/Btn";

function MyResult() {
  const [userInfo, setUserInfo] = useState({});

  const nav = useNavigate();
  const dispatch = useDispatch();
  const param = useParams();
  console.log(param);
  const data = useSelector((state) => state.login);
  // console.log(data);

  const isToken = localStorage.getItem("jwtToken");
  console.log(isToken);

  useEffect(() => {
    console.log(data);
    dispatch(saveUserInfo({ isToken: isToken, userId: data.token.userId }));
  }, []);
  // setUserInfo({
  //   isLoading: data.isLoading,
  //   statusMsg: data.message,
  //   statusCode: data.statusCode,
  // });
  // console.log(userInfo);

  const logout = () => {
    localStorage.removeItem("jwtToken");
    nav("/");
  };

  if (isToken === null) {
    return <div>가나다라 나중에..</div>;
  } else {
    console.log(data);
    if (data.statusCode === 200) {
      return (
        <div className={styles.ResultWrap}>
          <h1>{data.token.nickname}님의 결과</h1>
          <img
            src="https://post-phinf.pstatic.net/MjAxOTA5MDVfMzIg/MDAxNTY3NjQ4NDU4NTU1.4P198NsA7oOjGxw5TVkAgx_BbyXnhq-CgYR7Xg6tz9wg.ZDZHSj0lYWHbUMQU-wKlUyqjXYCQG0raRFEXT2FmCdsg.JPEG/2018033040211722.jpg?type=w1200"
            alt="국가이미지"
          />
          <h2>이탈리아입니다.</h2>
          <p>이탈리아은 이런도시입니다. 저런도시고 이렇다고 합니다</p>

          {/* 버튼 클릭시 로컬스토리지에 저장된 토큰 삭제... */}
          <Btn onClick={logout}>로그아웃</Btn>
          <Btn onClick={() => nav("/question")}>테스트하러가기</Btn>
        </div>
      );
    } else if (data.statusCode === 400) {
      return (
        <div className={styles.ResultWrap}>
          와라랄라라라라
          <Btn onClick={() => nav("/question")}>테스트하러가기</Btn>
        </div>
      );
    }
  }
}

export default MyResult;
