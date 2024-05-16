import React, { useState } from "react";
import jerseyPreviewsList from "./UniformStore/PreviewStore.jsx";


import CustomisableUniformSlices from "./CustomisableUniformSlices.jsx";
export default function UniformList() {
  const [jersey, setJersey] = useState();

  const handleClick = (id) => {
    localStorage.setItem("selectedJersy", id);
    setJersey(id);
  };

  return (
    <>
      {!jersey ? (
        <div id="uniform-tabs-content">
          <div id="tab1" className="tab-content">
            <div className="uniform-list-wrap scrollbar">
              <ul className="uniform-list list-unstyled">
                {jerseyPreviewsList.map((jerseyPreviewItem) => (
                  <li key={jerseyPreviewItem.id}>
                    <a onClick={() => handleClick(jerseyPreviewItem.id)}>
                      <div className="uniform-details new">
                        <figure>
                          <img
                            src={jerseyPreviewItem.src}
                            alt={jerseyPreviewItem.alt}
                          />
                        </figure>
                        <div className="uniform-tag">
                          N{jerseyPreviewItem.id}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <CustomisableUniformSlices />
      )}
     
    </>
  );
}
