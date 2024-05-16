import React from 'react'
import { uniformColor, shoulderColor, neckColor } from '../../utils/colorData'
import { ColorList } from './elementsParts/ColorList'
import { useDispatch, useSelector } from 'react-redux';
import { selectedColorsSliceActions } from '../../store/SelectedColorsSlice';

export const Color = ({ uniformData, selectedTab, handleTab }) => {

    const dispatch = useDispatch();

    const colorTab = useSelector(state => state.colorTab);

    const handleColorTab = (color) => {
        dispatch(selectedColorsSliceActions.setSelectedColorTab(color))
    }

    const isAllowedNeckStyle = [2, 4, 12].some(style => uniformData['neck_style'] === style);

    return (
        <li className={`color-uniform ${selectedTab == 'color-uniform-layer' ? 'active' : ''}`} >
            <h3 onClick={() => handleTab('color-uniform-layer')}>Color Uniform</h3>
            <div className="answer-wrap">
                <div className="answer">
                    <div className="customize-prod-list scrollbar">
                        <div className="wraper">
                            <h4 className="customize-heading">Uniform Colors</h4>
                            <div className="color-row">
                                {
                                    uniformColor.map((color, index) => {
                                        if (uniformData.uniform_layers >= index) {
                                            return <ColorList
                                                color={uniformData[color.value]}
                                                key={index}
                                                indexData={index}
                                                containerID={color.containerID}
                                                id={color.id}
                                                handleColorTab={handleColorTab}
                                                colorTab={colorTab}
                                                canvasId ={color.canvasId}
                                            />
                                        }
                                        return null
                                    })
                                }
                            </div>
                        </div>
                        <div className="wraper">
                            <h4 className="customize-heading">Neck Colors</h4>
                            <div className="color-row">
                                {
                                    neckColor.map((color, index) => {
                                        const isIndex2 = index === 2;

                                        if (!isIndex2 || isAllowedNeckStyle) {
                                            return (
                                                <ColorList
                                                    color={uniformData[color.value]}
                                                    key={index}
                                                    indexData={index}
                                                    containerID={color.containerID}
                                                    id={color.id}
                                                    handleColorTab={handleColorTab}
                                                    colorTab={colorTab}
                                                    canvasId ={color.canvasId}
                                                />
                                            );
                                        }

                                        return null;
                                    })
                                }
                            </div>
                        </div>
                        <div className="wraper">
                            <h4 className="customize-heading">Shoulder Style Colors
                            </h4>
                            <div className="color-row">
                                {
                                    shoulderColor.map((color, index) => {
                                        if (uniformData.shoulder_layers >= index) {
                                            return <ColorList
                                                color={uniformData[color.value]}
                                                key={index}
                                                indexData={index}
                                                containerID={color.containerID}
                                                id={color.id}
                                                handleColorTab={handleColorTab}
                                                colorTab={colorTab}
                                                canvasId ={color.canvasId}
                                            />
                                        }
                                        return null
                                    })
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </li >
    )
}
