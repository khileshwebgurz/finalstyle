import React, { useState } from "react";
import ShoulderStore from "../UniformStore/ShoulderStore.jsx";

export default function Shoulder({ onShoulderSelect }) {
  
  const ShoulderImages = ShoulderStore(); // Corrected function call

  const [showAnswer, setShowAnswer] = useState(false);

  const handleShoulderImageClick = (shoulderImg) => {
    onShoulderSelect(shoulderImg);
  };

  const handleTab = (tabname) => {
    if (tabname === "shoulder-type-layer") {
      setShowAnswer(!showAnswer);
    }
  };
  return (
    <>
      <li className={`shoulder-type ${showAnswer ? "active" : ""}`}>
        <h3 onClick={() => handleTab("shoulder-type-layer")}>
          Choose Your Shoulder Type
        </h3>
        {showAnswer && (
          <div className="answer-wrap">
            <div className="customize-prod-list">
              <div className="wraper shoulder-size">
                <h4>Shoulder Size</h4>

                <div className="customize-info">
                  {ShoulderImages.map((ShoulderTypes) => (
                    <div
                      className="customize-info-inner shoulderType"
                      key={ShoulderTypes.id}
                      onClick={() =>
                        handleShoulderImageClick({
                          frontassociate: ShoulderTypes.frontassociate,
                          backassociate: ShoulderTypes.backassociate,
                        })
                      }
                    >
                      <div className={`info ${"wideshoulder" ? "" : ""}`}>
                        <figure>
                          <img
                            key={ShoulderTypes.id}
                            src={ShoulderTypes.src}
                            alt=""
                          />
                          <figcaption>{ShoulderTypes.name}</figcaption>
                        </figure>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="jersey-stripes"></div>
            </div>
          </div>
        )}
      </li>
    </>
  );
}
