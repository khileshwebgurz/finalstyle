import JerseyFront from "../JerseyComponents/JerseyFront";
import Avatar from "@mui/material/Avatar";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import JerseyLeft from "../JerseyComponents/JerseyLeft";
import JerseyRight from "../JerseyComponents/JerseyRight";
import JerseyBack from "../JerseyComponents/JerseyBack";
import { useEffect, useState } from "react";
import front from "../../assets/images/jersey-images/UNIFORM FRONT.png";
import back from "../../assets/images/jersey-images/UNIFORM BACK.png";
import left from "../../assets/images/jersey-images/UNIFORM LEFT SIDE.png";
import right from "../../assets/images/jersey-images/UNIFORM RIGHT SIDE.png";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Canvas({
  shapeColor,
  selectedNeckImage,
  selectedShoulderImage,
  selectedCutorNoCut,
}) {
  const [value, setValue] = useState(0);
  const [initialRender, setInitialRender] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // for cut or not cut side images
  useEffect(() => {
    //for cut or no cut selection
    if (!initialRender && selectedCutorNoCut) {
      if (value === 2 && selectedCutorNoCut.left) {
        setValue(2);
      } else if (value === 3 && selectedCutorNoCut.right) {
        setValue(3);
      } else {
        setValue(2);
      }
    } else {
      setInitialRender(false);
    }
  }, [selectedCutorNoCut]);

  // for selectedShoulderImages
  useEffect(() => {
    if (selectedShoulderImage) {
      if (
        (value === 2 || value === 3) &&
        (selectedShoulderImage.frontassociate ||
          selectedShoulderImage.backassociate)
      ) {
        setValue(0);
      }
    }
  }, [selectedShoulderImage]);

  // for selectedNeckImages
  useEffect(() => {
    if (selectedNeckImage && value !== 0) {
      setValue(0);
    }
  }, [selectedNeckImage]);
  return (
    <>
      <div className="customize-view ">
        <div id="scroll_change" className="customize-view__inner">
          <div
            className="customize-view__wrap flex-row"
            style={{ display: "flex", flexWrap: "nowrap" }}
          >
            <div className="customize-view__large flex-col">
              <div className="customize-view__details">
                <div className="customize-view__image" id="html-content-holder">
                  <TabPanel value={value} index={0}>
                    <JerseyFront
                      shapeColors={shapeColor}
                      selectedNeckImage={selectedNeckImage}
                      selectedShoulderImage={
                        selectedShoulderImage.frontassociate
                      }
                    />
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <JerseyBack
                      shapeColors={shapeColor}
                      selectedShoulderImage={
                        selectedShoulderImage.backassociate
                      }
                    />
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    <JerseyLeft
                      shapeColors={shapeColor}
                      selectedvorNovImg={selectedCutorNoCut.left}
                    />
                  </TabPanel>
                  <TabPanel value={value} index={3}>
                    <JerseyRight
                      shapeColors={shapeColor}
                      selectedvorNovImg={selectedCutorNoCut.right}
                    />
                  </TabPanel>
                </div>
              </div>
            </div>

            <div className="customize-view__large flex-col">
              <div className="customize-view__details">
                <div className="customize-view__image" id="html-content-holder">
                  <Box
                    sx={{
                      flexGrow: 1,
                      bgcolor: "background.paper",
                      display: "flex",
                      height: "100%",
                    }}
                  >
                    <Tabs
                      orientation="vertical"
                      value={value}
                      onChange={handleChange}
                      aria-label="Vertical tabs example"
                      container="true"
                      spacing={2}
                    >
                      <Tab
                        style={{ minHeight: 150 }}
                        icon={
                          <Avatar
                            style={{ minHeight: 100, minWidth: 70 }}
                            src={front}
                          />
                        }
                        {...a11yProps(0)}
                      />
                      <Tab
                        style={{ minHeight: 150 }}
                        icon={
                          <Avatar
                            style={{ minHeight: 100, minWidth: 70 }}
                            src={back}
                          />
                        }
                        {...a11yProps(1)}
                      />
                      <Tab
                        style={{ minHeight: 150 }}
                        icon={
                          <Avatar
                            style={{ minHeight: 100, minWidth: 70 }}
                            src={left}
                          />
                        }
                        {...a11yProps(2)}
                      />
                      <Tab
                        style={{ minHeight: 150 }}
                        icon={
                          <Avatar
                            style={{ minHeight: 100, minWidth: 70 }}
                            src={right}
                          />
                        }
                        {...a11yProps(3)}
                      />
                    </Tabs>
                  </Box>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-block btn-fixed">
            <div className="flex-row bottom-section">
              <div className="bottom-sec">
                <h3 className="txtuni">Customize Your New Uniform </h3>
                <button id="saveunii" className="btn-design save-uniform">
                  Save Uniform
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
