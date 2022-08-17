import React, { useEffect, useRef, useState } from "react";
import Btn from "../elements/Btn";
import styles from "../../css_modules/LoginPage.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendLogin } from "../../redux/modules/looginSlice";

const Login = () => {
  //hook
  const navi = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.login);

  const [callData, setCallData] = useState(0);

  const id_ref = useRef("");
  const pw_ref = useRef("");

  useEffect(() => {
    if (callData > 0) {
      dispatch(
        sendLogin({
          userId: id_ref.current.value,
          password: pw_ref.current.value,
        })
      );
      setTimeout(() => {
        alramInfo();
      }, 2000);
    } else {
      return;
    }
  }, [callData]);

  const checkLogin = (e) => {
    e.preventDefault();
    setCallData(1);
  };
  const alramInfo = () => {
    console.log("hhi");
    if (data.statusCode == 200) {
      alert("안녕");
    } else {
      alert("잘가");
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.loginWarp}>
        <h2>LOG IN</h2>
        <form onSubmit={checkLogin}>
          <input type="text" placeholder="ID" ref={id_ref} />
          <input type="password" placeholder="PW" ref={pw_ref} />
          <div className={styles.btnWarp}>
            <Btn type="button" width="140px">
              LOG IN
            </Btn>
            <Btn onClick={() => navi("/signup")} width="140px">
              SIGN UP
            </Btn>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
