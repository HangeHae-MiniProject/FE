import React from "react";
import Btn from "../elements/Btn";
import styles from "../../css_modules/LoginPage.module.css";

const Login = () => {
  return (
    <div className={styles.loginWarp}>
      <h2>LOG IN</h2>
      <input type="text" placeholder="ID" />
      <input type="text" placeholder="PW" />
      <Btn>LOG IN</Btn>
      <Btn marginLeft="10px">SIGN UP</Btn>
    </div>
  );
};

export default Login;