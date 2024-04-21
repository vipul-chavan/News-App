import React from "react";
import loading111 from "./assets/loading111.gif";

const Spinner = () => {

    return (
<div style={{ display: "flex", justifyContent: "center" }}>
  <div>
    <img src={loading111} alt="loading" style={{ width: "75px", height: "75px" }} />
  </div>
</div>
    );
  
}

export default Spinner;
