import React from 'react';
import { withRouter } from "react-router-dom"
import { Button } from "zarm"
import MyIcon from "@/components/icon"
import styled from "styled-components"
// import Audio from "@/components/audio/index2"
import Audio from "@/components/audio"
import bgimg from '@/components/audio/player-bg.jpg'

const Container = styled.div`
    background:url('${bgimg}') no-repeat center;
    background-size:cover;
    position:relative;
    width:100vw;
    height:100vh;
        p{
            position:absolute;
            z-index:121;
            top:10px;
            right:10px;
            cursor: pointer;
        }
        .audio{
            padding-top:60px;
        }
    
`
const Music = (props) => {
    const gohome = () => {
        props.history.push('/home')
    }
    const streamUrl = 'http://120.76.63.188:3001/components/audio/qingtian.mp3';
    const trackTitle = '晴天'
    return (
        <Container>
            <p>
                <Button shape="circle" onClick={gohome}>
                    <MyIcon type="icon-fanhui" />
                </Button>
            </p>
            <div className="audio">
                <Audio
                   streamUrl={streamUrl}
                   trackTitle={trackTitle} 
                   preloadType="auto"
                />
                {/* <Audio
                 src={streamUrl}
                 title={trackTitle}
                /> */}
            </div>
            

        </Container>
    );
}

export default withRouter(Music)
