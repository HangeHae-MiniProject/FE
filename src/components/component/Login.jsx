import React, { useEffect, useRef, useState } from "react";
import Btn from "../elements/Btn";
import styles from "../../css_modules/LoginPage.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendLogin } from "../../redux/modules/looginSlice";

const Login = () => {
  //hook
  const nav = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.login);

  const [callData, setCallData] = useState(false);

  const id_ref = useRef("");
  const pw_ref = useRef("");

  useEffect(() => {
    if (callData) {
      dispatch(
        sendLogin({
          userId: id_ref.current.value,
          password: pw_ref.current.value,
        })
      );
    } else {
      return;
    }
  }, [callData]);

  //alert 함수 호출 조건
  if (!data.isLoading && callData) {
    if (data.statusCode === 200) {
      //로그인도 있고 결과도 있는 경우
      alert(data.message);
      nav("/mypage");
    } else if (data.statusCode === 400) {
      //로그인은 있지만 결과가 없는 경우
      alert(data.message);
      nav("/mypage");
    } else {
      alert("회원정보 없음");
      return;
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
            <Btn onClick={() => nav("/signup")} width="140px" height="40px">
              SIGN UP
            </Btn>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
