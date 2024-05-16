import React, { useEffect } from "react";
import Neck from "./UniformElements/Neck.jsx";
import NeckImgeList from "./UniformStore/NeckStore.jsx";
import Shoulder from "./UniformElements/Shoulder.jsx";
import JerseyCustomisableData from "../utils/jerseyCustomisableData.js"
import ShoulderStore from "./UniformStore/ShoulderStore.jsx";

import Vtype from "./UniformElements/Vtype.jsx";
import Color from "./UniformElements/Color.jsx";
import Canvas from "./UniformElements/Canvas.jsx";

import { useState } from "react";

export default function CustomisableUniformSlices() {
  const ShoulderImages = ShoulderStore(); // Corrected function call

  const jersyNum = localStorage.getItem("selectedJersy");

  const vleftside = `assets/jerseys/${jersyNum}/slicings/crew_leftside.png`;
  const vrightside = `assets/jerseys/${jersyNum}/slicings/crew_rightside.png`;
  const noVLeftSide = `assets/jerseys/${jersyNum}/slicings/crew_noV_leftside.png`;
  const noVRightSide = `assets/jerseys/${jersyNum}/slicings/crew_noV_rightside.png`;

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // state for selected Neck Options
  const [selectedNeckImage, setSelectedNeckImage] = useState(
    NeckImgeList[0].src
  );

  // callback function for getting selected neck from options
  const handleNeckImageSelect = (neckImage) => {
    setSelectedNeckImage(neckImage);
  };
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // state for selected shoulder Image
  const [selectedShoulderImage, setSelectedShoulderImage] = useState({
    frontassociate: ShoulderImages[0].frontassociate,
    backassociate: ShoulderImages[0].backassociate,
  });

  // callback function for getting selected shoulder from option
  const handleShoulderImageSelect = (shoulderImage) => {
    setSelectedShoulderImage(shoulderImage);
  };

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // state for cut or no cut image
  const [selectedCutorNoCut, setSelectedCutorNoCut] = useState({
    left: noVLeftSide,
    right: noVRightSide,
  });

  const handleVorNoVImageSelect = (type) => {
    if (type === "v") {
      setSelectedCutorNoCut({ left: vleftside, right: vrightside });
    } else if (type === "noV") {
      setSelectedCutorNoCut({ left: noVLeftSide, right: noVRightSide });
    }
  };

  // state for jersey component to color them
  const [shapeColor, setShapeColor] = useState({
    shirt1: "#bbd821",
    shirt2: "#beaf5d",
    shirt3: "#9723d9",
    shirt4: "#f863c1",
    shirt5: "#7033c3",
    shirt6: "#680f29",
    shirt7: "#170fe8",
    shirt8: "#66077e",
    shirt9: "#f88f37",
    shirt10: "#b54235",
    neck1: "#6d0c35",
    neck2: "#93392a",
    neck3:"#bbd821",
    neck4:"#beaf5d",
    neck5:"#9723d9",
    neck6: "#f863c1",
    neck7: "#7033c3",
    neck8:"#680f29",
    neck9: "#170fe8",
    neck10:"#66077e",
    shoulder1: "#d00f83",
    shoulder2: "#48d2dd"   
  });


    // callback function for getting selected color from child component
  const handleColorSelect = (color, area) => {
    // Update only the specific area's color while keeping others unchanged
    setShapeColor(prevColors => ({
      ...prevColors,
      [area]: color,
    }));
  };


  return (
    <>
      <div id="" className="customize-uniform">
        <div className="header-sec">
          <h3>
            Customize Your Uniform
            <a style={{ float: "right" }} className="btn-design fos">
              Fit on Screen
            </a>
          </h3>
          <span className="open-option">&#9776;</span>
        </div>
        <div
          id="customize-uniform_here"
          className="customize-layout flex-row fosCls"
        >
          <div className="customize-option">
            <ul className="accordion-list list-unstyled">
              <Neck onNeckSelect={handleNeckImageSelect} />
              <Shoulder onShoulderSelect={handleShoulderImageSelect} />
              <Vtype onImageSelect={handleVorNoVImageSelect} />
              <Color onColorSelect={handleColorSelect} />
            </ul>
          </div>
          <Canvas
            shapeColor={shapeColor}
            selectedNeckImage={selectedNeckImage}
            selectedShoulderImage={selectedShoulderImage}
            selectedCutorNoCut={selectedCutorNoCut}
          />
        </div>
      </div>
    </>
  );
}
