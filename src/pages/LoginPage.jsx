import React from "react";

const LoginPage = () => {
  return (
    <div>
      <div>
        <h2>로그인</h2>
        <input type="text" placeholder="ID" />
        <input type="text" placeholder="PW" />
        <button>로그인</button>
        <button>회원가입</button>
      </div>
    </div>
  )
}

export default LoginPage