import React from "react";
import Btn from "../elements/Btn";
import styles from "../../css_modules/SignUpPage.module.css";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { signUpData } from "../../redux/modules/signUpSlice";

const SignUp = () => {
  const initialState = {
    userid: "",
    nickname: "",
    password: "",
    confirm: "",
  }

  const [signUp, setSignUp] = useState(initialState)

  const inputRef = useRef()

  const dispatch = useDispatch();
  const responseData = useSelector((state) => state)
  console.log(responseData)

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setSignUp({ ...signUp, [name]: value })
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    dispatch(signUpData(signUp))
  }

  return (
    <form onSubmit={onSubmitHandler} className={styles.joinWarp}>
      <h2>SIGN UP</h2>

      <input ref={inputRef} /* onBlur={idCheck} */ onChange={onChangeHandler} type="text" placeholder="ID" name="userid" value={signUp.userid} />
      <span>{signUp.userid === "" ? "아이디를 입력해 주세요" : ""}</span>

      <input ref={inputRef} /* onBlur={idCheck} */ onChange={onChangeHandler} type="text" placeholder="NICK NAME" name="nickname" value={signUp.nickname} />
      <span>{signUp.nickname === "" ? "닉네임을 입력 해주세요" : ""}</span>

      <input ref={inputRef} /* onBlur={idCheck} */ onChange={onChangeHandler} type="password" placeholder="PASSWORD" name="password" value={signUp.password} />
      <span>{signUp.password === "" ? "비밀번호를 입력 해주세요." : ""}</span>


      <input ref={inputRef} /* onBlur={idCheck} */ onChange={onChangeHandler} type="password" placeholder="PW CHECK" name="confirm" value={signUp.confirm} />
      <span>{signUp.confirm === "" ? "비밀번호를 입력 해주세요." : signUp.confirm === signUp.password ? "" : "비밀번호가 다릅니다."}</span>
      <Btn>JOIN</Btn>
    </form>
  );
};

export default SignUp;