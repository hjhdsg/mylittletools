import React, { useEffect, useRef } from 'react'
import { withRouter } from "react-router-dom"
import { createMap } from '@/api'
import styled from "styled-components"
import { Button } from "zarm"
import MyIcon from "@/components/icon"

const Container = styled.div`
position:relative;
    #map{
        width:100vw;
        height:100vh;
    }
    p{
        position:absolute;
        z-index:121;
        top:10px;
        right:10px;
        cursor: pointer;
    }
    
`

function Map(props) {
    const ref_map = useRef()
    useEffect(() => {
        createMap('map')
    })
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
            <div id="map" ref={ref_map} ></div>
        </Container>
    )
}


export default withRouter(Map)
