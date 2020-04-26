import React, { Component } from 'react';
import styled from 'styled-components';
import { Stage, Layer, Image } from 'react-konva';
import Konva from 'konva';
import { Slide } from '@material-ui/core';

class Canvas extends Component {
    constructor(props) {
        super(props);
        this.props.store.stageInit();
    }
    // componentDidMount() {
    //   this.applyCache();
    // }
    componentDidUpdate() {
        // this.applyCache();
        console.log(this.props.store.img);
        console.log(this.props.store.imgURL);
        console.log(this.props.hue);
        console.log(this.props.saturation);
        console.log(this.props.value);
    }
    // handleClick = () => {
    // };
    // applyCache() {
    //   this.rect.cache();
    //   this.rect.getLayer().batchDraw();
    // }

    render() {
        const store = this.props.store;
        const { hue, saturation, value } = this.props;
        return (
            <StCanvasCont id="canvas-container">
                <Stage
                    ref={(ref) => {
                        store.stageRef = ref;
                    }}
                    // ref={ref => { this.props.store.stageRef = ref; }}
                    style={{ display: 'flex', backgroundColor: 'gray' }}
                    width={store.stageHistory[store.historyIdx].width}
                    height={store.stageHistory[store.historyIdx].height}
                    scaleX={store.stageHistory[store.historyIdx].scale}
                    scaleY={store.stageHistory[store.historyIdx].scale}
                    // width={this.props.store.stageWidth}
                    // height={this.props.store.stageHeight}
                    // scaleX={this.props.store.scale}
                    // scaleY={this.props.store.scale}
                >
                    <Layer
                        id="display-layer"
                        // ref={ref => { this.props.store.layerRef = ref; }}
                        ref={(ref) => {
                            store.layerRef = ref;
                        }}
                    >
                        {store.imgHistory[store.historyIdx]}
                    </Layer>

                    {store.curMode !== '' ? (
                        <Layer id="edit-layer">
                            {store.curMode === 'adjust' ? (
                                <Image
                                    id="filter"
                                    image={store.img}
                                    filters={[Konva.Filters.HSV]}
                                    hue={hue}
                                    saturation={saturation}
                                    value={value}
                                    ref={(ref) => {
                                        store.filterRef = ref;
                                    }}
                                />
                            ) : null}
                        </Layer>
                    ) : null}

                    {
                        <Layer id="ai-layer">
                            {store.segCheckList.map((value, i) =>
                                value ? store.segList[i] : null
                            )}
                            {}
                        </Layer>
                    }
                </Stage>
            </StCanvasCont>
        );
    }
}
export default Canvas;

const StCanvasCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #333333;
    width: 100%;
    height: 50%;
    margin-bottom: 65%;
`;
