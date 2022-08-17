import React from "react";
import Btn from "../elements/Btn";
import styles from "../../css_modules/SignUpPage.module.css";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { signUpData } from "../../redux/modules/signUpSlice";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const initialState = {
    userId: "",
    nickname: "",
    password: "",
    confirm: "",
  }
  const nav = useNavigate()

  const [signUp, setSignUp] = useState(initialState)

  const inputRef = useRef()

  const dispatch = useDispatch();

  const responseData = useSelector((state) => state.sign)
  // 정규식 리스트
  // 아이디 정규식 공백, 특수문자 불가
  // 비밀번호 정규식 영 + 숫 + 특 5자리 ~ 24 자리
  let pwRule = /^[a-zA-Z\\d`~!@#$%^&*()-_=+]{5,24}$/

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    if (!/[a-zA-Zㄱ-ㅎ가-힣ㅏ-ㅣ]/.test(signUp.userId)) {
      console.log("확인")
    } else if (!pwRule.test(signUp.password)) {
      console.log("비밀번호는 5자 이상이여야 합니다.")
    }

    setSignUp({ ...signUp, [name]: value })
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    dispatch(signUpData(signUp))
  }

  // 회원 가입 결과 alert 로직
  if (responseData.stateCode === 200) {
    console.log(responseData)
    alert(responseData.message)
    nav("/login")
  } else if (responseData.stateCode === 400) {
    alert(responseData.message)
    window.location.reload()
  }


  return (
    <form onSubmit={onSubmitHandler} className={styles.joinWarp}>
      <h2>SIGN UP</h2>
      <div className={styles.inputWarp}>
        <input ref={inputRef} onChange={onChangeHandler} type="text" placeholder="ID" name="userId" value={signUp.userid} />
        <span>{signUp.userId === "" ? "아이디를 입력해 주세요" : ""}</span>
      </div>

      <div className={styles.inputWarp}>
        <input ref={inputRef} onChange={onChangeHandler} type="text" placeholder="NICK NAME" name="nickname" value={signUp.nickname} />
        <span>{signUp.nickname === "" ? "닉네임을 입력 해주세요" : ""}</span>
      </div>

      <div className={styles.inputWarp}>
        <input ref={inputRef} onChange={onChangeHandler} type="password" placeholder="PASSWORD" name="password" value={signUp.password} />
        <span>{signUp.password === "" ? "비밀번호를 입력 해주세요." : ""}</span>
      </div>

      <div className={styles.inputWarp}>
        <input ref={inputRef} onChange={onChangeHandler} type="password" placeholder="PW CHECK" name="confirm" value={signUp.confirm} />
        <span>{signUp.confirm === "" ? "비밀번호를 입력 해주세요." : signUp.confirm === signUp.password ? "" : "비밀번호가 일치하지 않습니다."}</span>
      </div>

      <Btn height="30px" >JOIN</Btn>
    </form>
  );
};

export default SignUp;
