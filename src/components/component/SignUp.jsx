import React from "react";
import Btn from "../elements/Btn";
import styles from "../../css_modules/SignUpPage.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import signUpSlice from "../../redux/modules/signUpSlice";
import { useEffect } from "react";

const SignUp = () => {
  const [signUp, setSignUp] = useState({
    userid: "",
    nickname: "",
    password: "",
    confirm: "",
  })



  const dispatch = useDispatch();
  const state = useSelector(state => state.data)

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setSignUp({ ...signUp, [name]: value })
  }
  console.log(signUp)

  const onSubmitHandler = (event) => {
    event.preventDefault()
    dispatch(signUpSlice.actions.ADD_DATA({ ...signUp }))
  }

  return (
    <form onSubmit={onSubmitHandler} className={styles.joinWarp}>
      <h2>SIGN UP</h2>
      <input onChange={onChangeHandler} type="text" placeholder="ID" name="userid" value={signUp.userid} />
      <input onChange={onChangeHandler} type="text" placeholder="NICK NAME" name="nickname" value={signUp.nickname} />
      <input onChange={onChangeHandler} type="text" placeholder="PASSWORD" name="password" value={signUp.password} />
      <input onChange={onChangeHandler} type="text" placeholder="PW CHECK" name="confirm" value={signUp.confirm} />
      <Btn>JOIN</Btn>
    </form>
  );
};

export default SignUp;
