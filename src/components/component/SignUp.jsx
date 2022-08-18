import React from "react";
import Btn from "../elements/Btn";
import styles from "../../css_modules/SignUpPage.module.css";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { signUpData } from "../../redux/modules/signUpSlice";
import { useNavigate, useLocation } from "react-router-dom";

const SignUp = () => {
  const initialState = {
    userId: "",
    nickname: "",
    password: "",
    confirm: "",
  };

  const [signUp, setSignUp] = useState(initialState);

  const [idMsg, setIdMsg] = useState("아이디를 입력해 주세요.");
  const [nickMsg, setNickMsg] = useState("닉네임을 입력해 주세요.");
  const [pwMsg, setPwMsg] = useState("비밀번호를 입력해 주세요.");
  const [confirmMsg, setConfirmMsg] = useState("비밀번호를 입력해 주세요.");

  const inputRef = useRef();
  const nav = useNavigate();

  const dispatch = useDispatch();
  const responseData = useSelector((state) => state.sign);

  const location = useLocation();
  const resultId = location.state.resultId;

  // 정규식 리스트
  // 아이디 정규식 공백, 특수문자 불가
  // 비밀번호 정규식 영 + 숫 5자리 ~ 15 자리
  const idRule =
    /[ \{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=\ㄱ-ㅎ가-힣ㅏ-ㅣ]{6,12}/gi;
  const pwRule = /^[a-zA-Z0-9]{5,12}$/;
  const nickRule = /^[ㄱ-ㅎ가-힣ㅏ-ㅣa-zA-Z0-9]{6,12}$/;

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    // 아이디 유효성
    if (name === "userId") {
      if (idRule.test(value) && value !== "") {
        setIdMsg("아이디는 영문과 숫자로만 가능합니다.");
      } else if (!idRule.test(value)) {
        setIdMsg("");
      }
    }

    // 닉네임 유효성
    else if (name === "nickname") {
      if (!nickRule.test(value)) {
        setNickMsg("닉네임은 6글자 이상 12글자 이하 입니다.");
      } else if (nickRule.test(value)) {
        setNickMsg("");
      }
    }

    // 비밀번호 유효성
    else if (name === "password") {
      if (!pwRule.test(value) && value !== "") {
        setPwMsg("비밀번호는 5자 이상 ~ 15자 이하여야 합니다.");
      } else if (value.includes(signUp.userId)) {
        setPwMsg("비밀번호에 ID를 포함 할 수 없습니다.");
      } else if (pwRule.test(value)) {
        setPwMsg("");
      }

      //2차 비밀번호 작성 후 비밀번호 작성 시 유효성 체크 로직
      if (value !== "" && signUp.confirm !== value) {
        setConfirmMsg("비밀번호가 다릅니다.");
      } else if (signUp.confirm == value) {
        setConfirmMsg("");
      }
    }
    // 비밀번호 확인 유효성
    else if (name === "confirm") {
      if (signUp.password !== "" && signUp.password !== value) {
        setConfirmMsg("비밀번호가 다릅니다.");
      } else if (signUp.password == value) {
        setConfirmMsg("");
      }
    }

    setSignUp({ ...signUp, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(signUpData(signUp));
  };

  // 회원 가입 결과 alert 로직
  if (responseData.stateCode === 200) {
    alert(responseData.message);
    nav("/login", { state: { resultId: resultId, type: "login" } });
  } else if (responseData.stateCode === 400) {
    alert(responseData.message);
    // window.location.reload()
  }

  return (
    <form onSubmit={onSubmitHandler} className={styles.joinWarp}>
      <h2>SIGN UP</h2>

      <div className={styles.inputWarp}>
        <input
          ref={inputRef}
          onChange={onChangeHandler}
          type="text"
          placeholder="ID"
          name="userId"
          value={signUp.userid}
        />
        <span>{idMsg}</span>
      </div>

      <div className={styles.inputWarp}>
        <input
          ref={inputRef}
          onChange={onChangeHandler}
          type="text"
          placeholder="NICK NAME"
          name="nickname"
          value={signUp.nickname}
        />
        <span>{nickMsg}</span>
      </div>

      <div className={styles.inputWarp}>
        <input
          ref={inputRef}
          onChange={onChangeHandler}
          type="password"
          placeholder="PASSWORD"
          name="password"
          value={signUp.password}
        />
        <span>{pwMsg}</span>
      </div>

      <div className={styles.inputWarp}>
        <input
          ref={inputRef}
          onChange={onChangeHandler}
          type="password"
          placeholder="PW CHECK"
          name="confirm"
          value={signUp.confirm}
        />
        <span>{confirmMsg}</span>
      </div>

      <Btn height="30px">JOIN</Btn>
    </form>
  );
};

export default SignUp;
