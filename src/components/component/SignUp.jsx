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

  const [signUp, setSignUp] = useState(initialState)

  const [idMsg, setIdMsg] = useState("아이디를 입력해 주세요.")
  const [nickMsg, setNickMsg] = useState("닉네임을 입력해 주세요.")
  const [pwMsg, setPwMsg] = useState("비밀번호를 입력해 주세요.")
  const [confirmMsg, setConfirmMsg] = useState("비밀번호를 입력해 주세요.")

  const inputRef = useRef()
  const nav = useNavigate()

  const dispatch = useDispatch();
  const responseData = useSelector((state) => state.sign)

  // 정규식 리스트
  // 아이디 정규식 공백, 특수문자 불가
  // 비밀번호 정규식 영 + 숫 5자리 ~ 1 자리
  const idRule = /[ \{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=\ㄱ-ㅎ가-힣ㅏ-ㅣ]/gi;
  const pwRule = /^[a-zA-Z0-9]{5,15}$/;

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setSignUp({ ...signUp, [name]: value })

  }

  //useEffect 시용히여 진행
  // 아이디 유효성
  const check = () => {
    if (event.target.name === "userId") {
      if (idRule.test(signUp.userId) && signUp.userId !== "") {
        setIdMsg("아이디는 영문과 숫자로만 가능합니다.")
      } else if (!idRule.test(signUp.userId)) {
        setIdMsg("")
      }
    }
    // 비밀번호 유효성
    if (!pwRule.test(signUp.password) && signUp.password !== "") {
      setPwMsg("비밀번호는 5자 이상이여야 합니다.")
    } else if (pwRule.test(signUp.password)) {
      setPwMsg("테스트")
    }

    // 비밀번호 확인 유효성
    if (signUp.password !== "" && signUp.password !== signUp.confirm) {
      setConfirmMsg("비밀번호가 다릅니다.")
    } else if (signUp.password == signUp.confirm) {
      setConfirmMsg("")
    }
  }
  console.log(signUp)


  // const check = () => {

  // }


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
        <span>{idMsg}</span>
      </div>

      <div className={styles.inputWarp}>
        <input ref={inputRef} onChange={onChangeHandler} type="text" placeholder="NICK NAME" name="nickname" value={signUp.nickname} />
        <span>{nickMsg}</span>
      </div>

      <div className={styles.inputWarp}>
        <input ref={inputRef} onChange={onChangeHandler} type="password" placeholder="PASSWORD" name="password" value={signUp.password} />
        <span>{pwMsg}</span>
      </div>

      <div className={styles.inputWarp}>
        <input ref={inputRef} onChange={onChangeHandler} type="password" placeholder="PW CHECK" name="confirm" value={signUp.confirm} />
        <span>{confirmMsg}</span>
      </div>

      <Btn height="30px" >JOIN</Btn>
    </form>
  );
};

export default SignUp;
