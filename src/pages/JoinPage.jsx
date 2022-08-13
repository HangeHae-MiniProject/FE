import React from "react";
import Btn from "../components/elements/Btn";
import styles from "../css_modules/JoinPage.module.css"

const JoinPage = () => {
  return (
    <div className={styles.joinWarp}>
      <h2>SIGN UP</h2>
      <input type="text" placeholder="ID" />
      <input type="text" placeholder="PW" />
      <Btn>JOIN</Btn>
    </div>
  )
}

export default JoinPage;
