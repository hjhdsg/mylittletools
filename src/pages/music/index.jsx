import React from 'react';
import { withRouter } from "react-router-dom"
import { Button } from "zarm"
import MyIcon from "@/components/icon"
import styled from "styled-components"
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
    
    return (
        <Container>
            <p>
                <Button shape="circle" onClick={gohome}>
                    <MyIcon type="icon-fanhui" />
                </Button>
            </p>
            <div className="audio">
                <Audio />
            </div>
            

        </Container>
    );
}

export default withRouter(Music)
