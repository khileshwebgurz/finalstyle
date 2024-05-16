import React, { useState } from "react";
import NeckImgeList from "../UniformStore/NeckStore";

export default function Neck({ onNeckSelect }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleTab = (tabName) => {
    if (tabName === "neck-style-layer") {
      setShowAnswer(!showAnswer);
    }
  };
  const handleNeckImageClick = (neckImage) => {
    onNeckSelect(neckImage);
  };

  return (
    <>
      <li className={`neck-style ${showAnswer ? "active" : ""}`}>
        <h3 onClick={() => handleTab("neck-style-layer")}>
          Choose Your Neck Style
        </h3>

        {showAnswer && (
          <div className="answer-wrap">
            <div className="answer">
              <div className="customize-prod-list scrollbar">
                <ul className="list-unstyled">
                  {NeckImgeList.map((neckimge) => (
                    <li
                      key={neckimge.id}
                      onClick={() => handleNeckImageClick(neckimge.src)}
                    >
                      <div
                        id="collar-img"
                        className={`detail zoomNeck highlightNeck`}
                      >
                        <figure>
                          <img src={neckimge.src} alt="" />
                        </figure>
                        <div className="uniform-tag">N{neckimge.id}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </li>
    </>
  );
}
