import React, { useState } from "react";
import Btn from "../elements/Btn";
import styles from "../../css_modules/LoginPage.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navi = useNavigate();
  const [state, setState] = useState();

  const getVal = (e) => {
    console.log(e.target.value);
    setState(e.target.value);
  };

  const checkLogin = (e) => {
    e.preventDefault();
    alert("login");
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginWarp}>
        <h2>LOG IN</h2>
        <form onSubmit={checkLogin}>
          <input type="text" placeholder="ID" value={state} onChange={getVal} />
          <input type="text" placeholder="PW" />
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
