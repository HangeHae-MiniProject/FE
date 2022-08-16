import React, { useEffect, useRef, useState } from "react";
import Btn from "../elements/Btn";
import styles from "../../css_modules/LoginPage.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendLogin } from "../../redux/modules/looginSlice";

const Login = () => {
  //hook
  const navi = useNavigate();
  const dispatch = useDispatch();

  const id_ref = useRef("");
  const pw_ref = useRef("");

  const checkLogin = (e) => {
    e.preventDefault();
    dispatch(
      sendLogin({
        userId: id_ref.current.value,
        password: pw_ref.current.value,
      })
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginWarp}>
        <h2>LOG IN</h2>
        <form onSubmit={checkLogin}>
          <input type="text" placeholder="ID" ref={id_ref} />
          <input type="text" placeholder="PW" ref={pw_ref} />
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
