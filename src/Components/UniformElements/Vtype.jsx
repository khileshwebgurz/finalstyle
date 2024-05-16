import React, { useState } from "react";
// imported images becuase loop was not functioning as expected
import vCutOne from "../../assets/images/cut-types/v-cut-top.png";
import vCutshort from "../../assets/images/cut-types/v-cut-shorts.png";
import noVcutTwo from "../../assets/images/cut-types/no-v-cut-top.png";
import noVCutshort from "../../assets/images/cut-types/no-v-cut-short.png";
export default function Vtype({ onImageSelect }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const handleTab = (event) => {
    if (event == "choose-v-layer") {
      setShowAnswer(!showAnswer);
    }
  };
  return (
    <>
      <li className={`choose-v ${showAnswer ? "active" : ""}`}>
        <h3 onClick={() => handleTab("choose-v-layer")}>
          Choose V or No V in Uniform
        </h3>
        {showAnswer && (
          <div className="answer-wrap">
            <div className="answer">
              <div className="customize-prod-list scrollbar">
                <div className="wraper shoulder-size">
                  <div className="customize-info">
                    <div className="customize-info-inner">
                      <div
                        className="info jersey-cutting active-jerseyCut"
                        data-id="noCut"
                      >
                        <button
                          className="button"
                          onClick={() => onImageSelect("v")}
                        >
                          <div className="info-group">
                            <figure>
                              <img src={vCutshort} alt="" />
                              <figcaption>No V Cut Top</figcaption>
                            </figure>
                            <figure>
                              <img src={vCutOne} alt="" />
                              <figcaption>No V Cut Shorts</figcaption>
                            </figure>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wraper shoulder-size">
                  <div className="customize-info">
                    <div className="customize-info-inner">
                      <div className="info jersey-cutting" data-id="vCut">
                        <button
                          className="button"
                          onClick={() => onImageSelect("noV")}
                        >
                          <div className="info-group">
                            <figure>
                              <img src={noVcutTwo} alt="" />
                              <figcaption>V Cut Shorts</figcaption>
                            </figure>
                            <figure>
                              <img src={noVCutshort} alt="" />
                              <figcaption>V Cut Top</figcaption>
                            </figure>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </li>
    </>
  );
}

{
  /* <div className="col">
          <button className="button" onClick={() => onImageSelect("v")}>
            <img src={v_cut_shorts} height={50} width={50} alt="one" />
            <img src={v_cut_top} height={50} width={50} alt="two" />
          </button>
        </div>

        <div className="col">
          <button className="button" onClick={() => onImageSelect("noV")}>
            <img src={no_v_cut_short} height={50} width={50} alt="one" />
            <img src={no_v_cut_top} height={50} width={50} alt="two" />
          </button>
        </div> */
}
