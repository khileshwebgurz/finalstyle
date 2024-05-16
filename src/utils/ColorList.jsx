import React from 'react'
import { allColors } from '../../../utils/colors'
import $ from 'jquery';
import { WidebackShoulder, WidefrontShoulder, backSide, frontSide, leftSide, rightSide } from '../../../assets/js/canvas';


export const ColorList = (props) => {

    const handleColor = (canvasId,newColor,input,currentElement) =>{

        let color = newColor;
        
        $(`#${input}`).css("background", color);
        $(`#${input}`).attr("data-color", color);

        $('.color-index').removeClass('active-shirtColor');
        $(currentElement).addClass('active-shirtColor');

        $(`#${canvasId}`).val(color);
        let selectedItem = jQuery('.activeSide').attr('data-id');
        let selectedShoulder = jQuery('.choosenShoulder').attr('data-id');

        if (selectedItem == "front-view") {
            if (selectedShoulder == "wide-shoulder") {
                setTimeout(WidefrontShoulder, 5);
            } else {
                setTimeout(frontSide, 5);
            }
        }
        if (selectedItem == "back-view") {
            if (selectedShoulder == "wide-shoulder") {
                setTimeout(WidebackShoulder, 5);
            } else {
                setTimeout(backSide, 5);
            }
        }
        if (selectedItem == "left-view") {
            setTimeout(leftSide, 5);
        }
        if (selectedItem == "right-view") {
            setTimeout(rightSide, 5);
        }
    }


    return (
        <div className="color-col">
            <div className="color-info">
                <input type="button" id={props.id} name={props.id} data-color={props.color} style={{ backgroundColor: props.color }} onClick={() => props.handleColorTab(props.id)} />
                <span>Color {props.index}</span>
                <span>ColorID: <span>299 2x</span></span>
            </div>

            <div id={props.containerID} className="grid-container" style={{ display : props.colorTab === props.id ? 'block' : 'none' }}>
                <h4 className="recentColours-heading">Recently selected colors<a onClick={() => props.handleColorTab(props.id)} className="colorClose">X</a></h4>
                <div className="rest-colors">
                    {allColors.map((color, index) => (
                        <div
                            key={index}
                            colorid={color}
                            className={`color-index item${index + 1}`}
                            style={{
                                backgroundColor: color,
                            }}

                            onClick={(e) => handleColor(props.canvasId,color,props.id,e.target)}
                        ></div>
                    ))}
                </div>
            </div>

        </div>
    )
}
