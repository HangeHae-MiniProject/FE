import React from "react";
import Layout from "../components/common/Layout";
import NoTokenResult from "../components/component/result/NoTokenResult";
import TokenResult from "../components/component/result/TokenResult";
// import Result from "../components/component/result/Result";

//토큰값 / resultID
function ResultPage() {
  const token = localStorage.getItem("jwtToken");
  return (
    <Layout data={token}>
      {/* 토큰값이 없는 경우 / 토큰값이 있는 경우 */}
      {token === null ? <NoTokenResult /> : <TokenResult />}
    </Layout>
  );
}
export default ResultPage;
