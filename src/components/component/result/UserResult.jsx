//회원이고 결과값도 있는 화면
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from "../../../css_modules/ResultPage.module.css";
import Btn from "../../elements/Btn";
import { getResults } from "../../../redux/modules/resultsSlice";
import axios from "axios";

const UserResult = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  // resultid에 해당하는 결과값을 들고온다.
  const userResult = useSelector((state) => state.result.results);
  console.log(userResult);

  // 유저 정보를 들고온다.
  const userInfo = useSelector((state) => state.login.token);
  console.log(userInfo);
  useEffect(() => {
    dispatch(getResults());
  }, []);

  // 로컬스토리지에 저장된 토큰 삭제
  const logout = () => {
    localStorage.removeItem("jwtToken");
    nav("/");
  };
  if (userResult !== undefined) {
    return (
      <div className={styles.ResultWrap}>
        <h1>{userInfo.nickname}님의 결과</h1>
        {/* <img src={userResult.countryInfo.resultImageUrl} alt="국가이미지" />
      <h2>{userResult.countryInfo.countryName}입니다.</h2>
      <p>{userResult.countryInfo.detailText}</p> */}
        {/* 버튼 클릭시 로컬스토리지에 저장된 토큰 삭제... */}
        <Btn onClick={logout}>로그아웃</Btn>
      </div>
    );
  }
};

export default UserResult;
