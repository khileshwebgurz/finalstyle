import React, { useState } from "react";

export const Steps = ({ gettingdata }) => {
  const [activeState, setActiveState] = useState(false);
  const handleStepClick = (step) => {
    gettingdata(step);
    setActiveState(true);
  };

  return (
    <>
      <ul id="uniform-tabs-nav" className="list-unstyled">
        {/* <li className="active navone"> */}
        <li className="active navone">
          <a onClick={() => handleStepClick(1)}>
            <div className="step">
              <div className="step-no">Step 1</div>
            </div>
            <div className="step-tab">
              <div className="step-tab-icon">
                <figure>
                  <img src="./assets/images/tab-product-icon.png" alt="" />
                </figure>
              </div>
              <h3 className="step-tab-name">Select Your Uniform</h3>
            </div>
          </a>
        </li>
        {/* <li className="navtwo"> */}
        <li className={`${activeState} navtwo`}>
          <a onClick={() => handleStepClick(2)}>
            <div className="step">
              <div className="step-no">Step 2</div>
            </div>
            <div className="step-tab">
              <div className="step-tab-icon">
                <figure>
                  <img
                    src="./assets/images/customize-uniform-icon.png"
                    alt=""
                  />
                </figure>
              </div>
              <h3 className="step-tab-name">Customize Your Uniform</h3>
            </div>
          </a>
        </li>
        {/* <li className="navthree"> */}
        <li className={`${activeState} navtwo`}>
          <a onClick={() => handleStepClick(3)}>
            <div className="step">
              <div className="step-no">Step 3</div>
            </div>
            <div className="step-tab">
              <div className="step-tab-icon">
                <figure>
                  <img src="./assets/images/tab-product-icon.png" alt="" />
                </figure>
              </div>
              <h3 className="step-tab-name">Finalize The Uniform</h3>
            </div>
          </a>
        </li>
      </ul>
    </>
  );
};
