import React from "react";
import CustomisableUniformSlices from "./CustomisableUniformSlices.jsx";

export default function CustomizeUniform(zz) {
  return (
    <>
      <div id="uniform-tabs-content" className="fosClssss">
        <div id="tab2" className="tab-content" style={{ display: "block" }}>
          <div
            className="beforeLoadTop"
            style={{
              width: "930px",
              margin: "0 auto",
              height: "891px",
              borderRadius: "10px",
              background: "rgb(18 18 18)",
              zIndex: "99999",
              textAlign: "center",
              display: "none",
            }}
          >
            <img
              src="src/assets/images/load.gif"
              style={{ width: "200px", marginTop: "25%" }}
            />
          </div>
          <div
            className="beforeLoad"
            style={{ width: "200px", margin: "0 auto" }}
          >
            <img src="src/assets/images/load.gif" style={{ width: "200px" }} />
          </div>
          <div className="afterLoad" id="fs" style={{ display: "none" }}>
            <CustomisableUniformSlices />
          </div>
        </div>
      </div>
    </>
  );
}
