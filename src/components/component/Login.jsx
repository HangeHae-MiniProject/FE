import React from "react";
import Btn from "../elements/Btn";
import styles from "../../css_modules/LoginPage.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navi = useNavigate()

  return (
    <div className={styles.container}>
      <div className={styles.loginWarp}>
        <h2>LOG IN</h2>
        <input type="text" placeholder="ID" />
        <input type="text" placeholder="PW" />
        <div className={styles.btnWarp}>
          <Btn width="140px" onClick={() => navi("/")}>LOG IN</Btn>
          <Btn width="140px" onClick={() => navi("/signup")}>SIGN UP</Btn>
        </div>
      </div>
    </div>
  );
};

export default Login;
