//회원이지만 결과값이 없는 경우 화면
import React from "react";
import { useNavigate } from "react-router-dom";
import Btn from "../../elements/Btn";
const UserNoResult = () => {
  const nav = useNavigate();
  return (
    <div>
      없다
      <Btn onClick={() => nav("/question")} width="150px" height="35px">
        테스트 하러가기
      </Btn>
    </div>
  );
};

export default UserNoResult;
