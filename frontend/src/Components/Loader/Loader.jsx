import React from "react";
import "./style.css";

function Loader() {
  return (
    <div className="coverPage">
      <div className="main">
        <img
          src="http://localhost:3000/loader.svg"
          style={{
            width: "150px",
          }}
          alt=""
        />
      </div>
    </div>
  );
}

export default Loader;
