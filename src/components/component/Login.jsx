import React, { useEffect, useRef, useState } from "react";
import Btn from "../elements/Btn";
import styles from "../../css_modules/LoginPage.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendLogin } from "../../redux/modules/loginSlice";
import { sendMainLogin } from "../../redux/modules/loginSlice";

const Login = () => {
  //hook
  const nav = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.login);
  const [callData, setCallData] = useState(false);

  const id_ref = useRef("");
  const pw_ref = useRef("");
  //메인화면에서 로그인 접근하는 경우 옵셔널 체이닝으로 ""처리 진행/ 있으면 resultId가져오기
  const location = useLocation();
  const resultId = location.state?.resultId || 0;
  const type = location.state.type;

  useEffect(() => {
    if (callData) {
      if (type === "login") {
        dispatch(
          sendLogin({
            userId: id_ref.current.value,
            password: pw_ref.current.value,
            resultId: resultId,
          })
        );
      } else if (type === "main_login") {
        dispatch(
          sendMainLogin({
            userId: id_ref.current.value,
            password: pw_ref.current.value,
          })
        );
      }
    } else {
      return;
    }
  }, [callData]);

  //alert 함수 호출 조건
  if (type === "login") {
    if (!data.isLoading && callData) {
      if (data.statusCode === 200) {
        //로그인도 있고 결과도 있는 경우
        alert(data.message);
        nav(`/results/${resultId}`, { state: { resultId: resultId } });
      } else if (data.statusCode === 400) {
        //로그인은 있지만 결과가 없는 경우
        alert(data.message);
        nav(`/results/${resultId}`, { state: { resultId: 0 } });
      } else if (data.statusCode === 401) {
        //회원정보가 있지만 비번 잘 못 입력 오류 및 정말 회원정보 없음
        alert("회원정보 없음");
        return;
      }
    }
  } else if (type === "main_login") {
    if (!data.isLoading && callData) {
      if (data.statusCode === 200) {
        //로그인도 있고 결과도 있는 경우
        alert(data.message);
        nav(`/results/${data.resultId}`, {
          state: { resultId: data.resultId },
        });
      } else if (data.statusCode === 401) {
        //회원정보가 있지만 비번 잘 못 입력 오류 및 정말 회원정보 없음
        alert("회원정보 없음");
        return;
      }
    }
  }

  const checkLogin = (e) => {
    e.preventDefault();
    //useEffect 랜더링 조건
    setCallData(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginWarp}>
        <h2>LOG IN</h2>
        <form onSubmit={checkLogin}>
          <input type="text" placeholder="ID" ref={id_ref} />
          <input type="password" placeholder="PW" ref={pw_ref} />
          <div className={styles.btnWarp}>
            <Btn type="button" width="140px" height="40px">
              LOG IN
            </Btn>
            <Btn
              onClick={() => nav("/signup", { state: { resultId: resultId } })}
              width="140px"
              height="40px"
            >
              SIGN UP
            </Btn>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
