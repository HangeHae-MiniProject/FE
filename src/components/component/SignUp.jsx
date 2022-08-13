import React from "react";
import Btn from "../elements/Btn";
import styles from "../../css_modules/SignUpPage.module.css";
import { useState } from "react";

const SignUp = () => {
  const [signUp, setSignUp] = useState({
    userid: "",
    nickname: "",
    password: "",
    confirm: "",
  })

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    console.log({ ...signUp, [name]: value })
  }

  return (
    <div className={styles.joinWarp}>
      <h2>SIGN UP</h2>
      <input onChange={onChangeHandler} type="text" placeholder="ID" name="userid" defaultValue={signUp.userid} />
      <input onChange={onChangeHandler} type="text" placeholder="NICK NAME" name="nickname" defaultValue={signUp.nickname} />
      <input onChange={onChangeHandler} type="text" placeholder="PASSWORD" name="password" defaultValue={signUp.password} />
      <input onChange={onChangeHandler} type="text" placeholder="PW CHECK" name="confirm" defaultValue={signUp.confirm} />
      <Btn>JOIN</Btn>
    </div>
  );
};

export default SignUp;
