import React from "react";
import UserResult from "./UserResult";
import UserNoResult from "./UserNoResult";
import { useLocation } from "react-router-dom";
const TokenResult = () => {
  const location = useLocation();
  const resultId = location.state.resultId;
  return (
    <div>
      {resultId !== 0 ? <UserResult data={resultId} /> : <UserNoResult />}
    </div>
  );
};

export default TokenResult;
