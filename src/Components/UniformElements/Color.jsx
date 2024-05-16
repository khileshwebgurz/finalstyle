import React, { useState } from "react";
import allColors from "../../utils/colors.js";
import JerseyCustomisableData from "../../utils/jerseyCustomisableData.js";

export default function Color({ onColorSelect }) {
  const selectedJersy = localStorage.getItem("selectedJersy");
  const jerseyData = JerseyCustomisableData[selectedJersy];

  const [showColor, setShowColor] = useState("");

  const handleShowColor = (palette) => {
    if (showColor === palette) {
      setShowColor("");
    } else {
      setShowColor(palette);
    }
  };

  const [showAnswer, setShowAnswer] = useState(false);

  const handleTab = (event) => {
    if (event === "color-uniform-layer") {
      setShowAnswer(!showAnswer);
    }
  };

  const handleColor = (color, area) => {
    console.log(color,area)
    onColorSelect(color, area); 
  };

  const renderColorSelection = (area, buttonText, layers) => {
    const colorAreas = [];
    for (let i = 1; i <= layers; i++) {
      colorAreas.push(
        <div className="wraper" key={i}>
          <h4 className="customize-heading">{buttonText} {i}</h4>
          <input
            type="button"
            style={{
              backgroundColor: "#fff",
              height: "30px",
              width: "30px",
              marginRight: "250px",
            }}
            onClick={() => handleShowColor(area + i)}
          />
          {showColor === area + i && (
            <div className="color-row">
              {allColors.map((color, index) => (
                <input
                  key={index}
                  type="button"
                  style={{
                    backgroundColor: color,
                    height: "15px",
                    width: "15px",
                  }}
                  onClick={(e) => handleColor(color, area+i)} // Pass area without index
                />
              ))}
            </div>
          )}
        </div>
      );
    }
    return colorAreas;
  };

  return (
    <>
      <li className={`color-uniform ${showAnswer ? "active" : ""}`}>
        <h3 onClick={() => handleTab("color-uniform-layer")}>Color Uniform</h3>
        {showAnswer && (
          <div className="answer-wrap">
            <div className="answer">
              <div className="customize-prod-list scrollbar">
                {renderColorSelection("shirt", "Uniform Colors", jerseyData.uniform_layers)}
                {renderColorSelection("neck", "Neck Colors", jerseyData.neck_style)}
                {renderColorSelection("shoulder", "Shoulder Style Colors", jerseyData.shoulder_layers)}
              </div>
            </div>
          </div>
        )}
      </li>
    </>
  );
}
