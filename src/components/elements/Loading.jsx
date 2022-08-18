import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
const Loding = () => {
  return (
    <div class="contentWrap">
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <PacmanLoader
          color="#3dee6f"
          height={15}
          width={5}
          radius={2}
          margin={2}
        />
      </div>
    </div>
  );
};
export default Loding;
