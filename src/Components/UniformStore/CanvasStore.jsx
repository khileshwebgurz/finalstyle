// export const canvasPreview = [
//     {id : 'static-preview' , img : 'crew_front_narrow_shoulder.png'},
//     {id : 'front-shadow-preview' , img : 'crew_front_narrow_shoulderbg.png'},
//     {id : 'back-preview' , img : 'crew_back_narrow_shoulder.png'},
//     {id : 'back-shadow-preview' , img : 'crew_back_narrow_shoulderbg.png'},
//     {id : 'rightside-preview' , img : 'crew_rightside.png'},
//     {id : 'rightside-shadow-preview' , img : 'crew_rightsidebg.png'},
//     {id : 'noCut-rightside-preview' , img : 'crew_noV_rightside.png'},
//     {id : 'noCut-rightside-shadow-preview' , img : 'crew_noV_rightsidebg.png'},
//     {id : 'leftside-preview' , img : 'crew_leftside.png'},
//     {id : 'leftside-shadow-preview' , img : 'crew_leftsidebg.png'},
//     {id : 'noCut-leftside-preview' , img : 'crew_noV_leftside.png'},
//     {id : 'noCut-leftside-shadow-preview' , img : 'crew_noV_leftsidebg.png'},
//     {id : 'frontside-wideShoulder-preview' , img : 'crew_front_wide_shoulder.png'},
//     {id : 'frontside-wideShoulder-shadow-preview' , img : 'crew_front_wide_shoulderbg.png'},
//     {id : 'backside-wideShoulder-preview' , img : 'crew_back_wide_shoulder.png'},
//     {id : 'backside-wideShoulder-shadow-preview' , img : 'crew_back_wide_shoulderbg.png'}
// ];

// export const uniformSidesData = [
//     {id : 'front-view' , img : 'UNIFORM FRONT.png' , title : 'Front' },
//     {id : 'back-view' , img : 'UNIFORM BACK.png' , title : 'Back'},
//     {id : 'left-view' , img : 'UNIFORM LEFT SIDE.png' , title : 'Left'},
//     {id : 'right-view' , img : 'UNIFORM RIGHT SIDE.png' , title : 'Right'},
// ];
import React from "react";
import LargeDataComponent from "./LargeDataComponent";
const CanvasStore = ({ jersey }) => {
  const canvasPreview = [
    {
      id: 1,
      value: { "uniformLayer": 2, "shoulderLayer": 1 },
    },
    {
      id: 2,
      value: { " uniformLayer": 1, "shoulderLayer": 2 },
    },
    {
      id: 3,
      value: { " uniformLayer": 1, "shoulderLayer": 2 },
    },
    {
      id: 4,
      value: { " uniformLayer": 1, "shoulderLayer": 2 },
    },
    {
      id: 5,
      value: { " uniformLayer": 1, "shoulderLayer": 2 },
    },
  ];

 
};

export default CanvasStore;

