import React, { Component } from 'react'

import Audio2 from './audio2'

import styled from "styled-components"
import Visualizer from './api.js'
const Style = styled.div`
    width:100vw;
    height:90vh;
    color: #FEFEFE;
    #fileWrapper {
        transition: all 0.5s ease;
        padding-left:40px;
    }

    #fileWrapper:hover {
        opacity: 1 !important;
    }

    #visualizer_wrapper {
        padding-top:10px;
        text-align: center;
    }
    #canvas{
        width:80vw;
        height:50vh;
    }

`
const streamUrl = 'http://120.76.63.188:3001/components/audio/qingtian.mp3';
const trackTitle = '晴天'
class Audio extends Component {
    render() {
        return (
            <Style>
                <div id="wrapper">
                    <div id="fileWrapper" className="file_wrapper">
                        <div id="info">
                            HTML5 Audio API 案例
                        </div>
                        <label htmlFor="uploadedFile">拖拽/选择一个文件进行播放:</label>
                        <input type="file" id="uploadedFile"></input>
                    </div>
                    <div id="visualizer_wrapper">
                        <canvas id='canvas'></canvas>
                    </div>
                </div>
                <Audio2 
                    streamUrl={streamUrl}
                    trackTitle={trackTitle} 
                    preloadType="auto"
                />
            </Style>
        );
    }
    componentDidMount() {
        new Visualizer().ini()
    }
}

export default Audio;

